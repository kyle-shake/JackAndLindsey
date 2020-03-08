import { Component, OnInit } from '@angular/core';
import { JnlVideo } from '@app/media/interfaces/jnl-video';
import { AuthenticationService } from '@app/_services/authentication.service';
import { MatDialog } from '@angular/material/dialog';
import { MediaService } from '@app/media/media.service';
import { JnlPhoto } from '@app/media/interfaces/jnl-photo';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { DeviceService } from '@app/_services/device.service';
import { AddMediaDialogComponent } from '../add-media-dialog/add-media-dialog.component';
import { MediaViewerDialogComponent } from '../media-viewer-dialog/media-viewer-dialog.component';
import { FilterMediaDialogComponent } from '../filter-media-dialog/filter-media-dialog.component';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.sass']
})
export class MediaGridComponent implements OnInit {
  isLoading = true;
  isAdmin = false;
  isMobile: boolean;
  isDataToView: boolean;
  mediaType: string;
  onPhotos: boolean;
  inEditMode: false;

  numItemsPerRow: number;
  MediaGridRowHeight = "200"

  sortAscending = true;

  UnfilteredCM: JnlVideo[] | JnlPhoto[];
  currentFilters;


  allPhotos: JnlPhoto[];
  allVideos: JnlVideo[];
  CurrentMedia: JnlVideo[] | JnlPhoto[];


  constructor(
    private MediaService: MediaService,
    private AuthService: AuthenticationService,
    private DeviceService: DeviceService,
    private AddMediaDialog: MatDialog,
    private MediaViewerDialog: MatDialog,
    private FilterMediaDialog: MatDialog,
    private route: ActivatedRouteSnapshot,
    private router: Router
  ) { }

  ngOnInit() {
    this.isAdmin = this.AuthService.currentUserValue.admin
    this.isMobile = this.DeviceService.getDeviceType();
    if(this.isMobile){
      this.numItemsPerRow = 4;
    }else{
      this.numItemsPerRow = 6;
    }
    this.mediaType = this.route.paramMap.get('mediatype');
    if(this.mediaType == "photos"){
      this.onPhotos = true;
      if(this.allPhotos){
        this.CurrentMedia = this.allPhotos;
        this.isLoading = false;
      }else{
        this.route.data.subscribe((data: {photos: JnlPhoto[]}) => {
          this.allPhotos = data.photos;
          this.CurrentMedia = this.allPhotos;
          this.isLoading = false;
        })
      }
    } else if(this.mediaType == "videos"){
      this.onPhotos = false;
      if(this.allVideos){
       this.CurrentMedia = this.allVideos;
       this.isLoading = false;
      }else{
        this.route.data.subscribe((data: {videos: JnlVideo[]}) => {
          this.allVideos = data.videos;
          this.CurrentMedia = this.allVideos;
          this.isLoading = false;
        })
      }
    }else{
      this.router.navigate['/404']
    }
    this.isDataToView = this.CurrentMedia.length > 0;

  }

  sortByDate(a: JnlPhoto|JnlVideo, b:JnlPhoto|JnlVideo){
    if(this.sortAscending)
      return a.tdate > b.tdate ? 1 : -1;
    else
      return a.tdate < b.tdate ? 1 : -1;

  }
  sortByLocation(a: JnlPhoto|JnlVideo, b:JnlPhoto|JnlVideo){
    if(this.sortAscending)
      return a.physloc > b.physloc ? 1 : -1;
    else
      return a.physloc < b.physloc ? 1 : -1;

  }
  sortByCategory(a: JnlPhoto|JnlVideo, b:JnlPhoto|JnlVideo){
    if(this.sortAscending)
      return a.categories > b.categories ? 1 : -1;
    else
      return a.categories < b.categories ? 1 : -1;

  }


  openFilterMediaDialog(){
    this.UnfilteredCM = this.CurrentMedia;
    let dataObj = {
      CurrentMedia: this.CurrentMedia,
      mediaType: this.mediaType,
      currentFilters: this.currentFilters
    }
    const FilterMediaDialogRef = this.FilterMediaDialog.open(FilterMediaDialogComponent,{
      data: dataObj
    });
    FilterMediaDialogRef.afterClosed().subscribe(result =>{
      this.CurrentMedia = result.filteredMedia;
      this.currentFilters = result.filtersAdded;
    });
  }

  showItemInViewer(item: JnlVideo|JnlPhoto, idx: number){
    let dataObj = {}
    if(this.onPhotos){
      dataObj = {photo: item};
    }else{
      dataObj = {video: item};
    }
    const ItemViewerDialogRef = this.MediaViewerDialog.open(MediaViewerDialogComponent, {
      data: dataObj, panelClass: 'transparent-bg'
    });
    ItemViewerDialogRef.afterClosed().subscribe(result => {
      if(result){//a returned result means the photo/video was edited

      }
    })
  }

  openAddMediaDialog(){
    const AddMediaDialogRef = this.AddMediaDialog.open(AddMediaDialogComponent, {
      data: {mediaType: this.mediaType}
    });

    AddMediaDialogRef.afterClosed().subscribe(result => {
      if(result){
        result.forEach(element => {
          this.CurrentMedia.splice(0, 0, element);
          if(this.onPhotos){
            this.allPhotos.splice(0, 0, element);
          }else{
            this.allVideos.splice(0, 0, element);
          }
        });

      }

    })
  }

  openEditMediaDialog(mediaItem: JnlPhoto | JnlVideo, idx: number){

  }

  openConfirmDeleteDialog(mediaItem: JnlPhoto, idx: number){

  }

}
