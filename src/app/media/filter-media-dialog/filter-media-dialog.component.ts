import { Component, OnInit, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectionListChange, MatSelectionList } from '@angular/material/list';
import * as moment from 'moment';

import { JnlPhoto } from '../interfaces/jnl-photo';
import { JnlVideo } from '../interfaces/jnl-video';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-filter-media-dialog',
  templateUrl: './filter-media-dialog.component.html',
  styleUrls: ['./filter-media-dialog.component.sass']
})
export class FilterMediaDialogComponent implements OnInit {

  isPhoto: boolean;

  mediaToFilter: JnlPhoto[]| JnlVideo[] = [];
  filteredMedia: JnlPhoto[]| JnlVideo[] = [];
  locations: string[];
  categories: string[];
  currentFilters = {
    enabled: false,
    tdate: {
      enabled: false,
      sDate: '',
      eDate: ''
    },
    udate: {
      enabled: false,
      sDate: '',
      eDate: ''
    },
    physloc: {
      enabled: false,
      filLocs: []
    },
    desc: {
      enabled: false,
      filVal: ''
    },
    categories: {
      enabled: false,
      filCats: []
    },
    ytlink: {
      enabled: false,
      withLink: null
    }
  };

  constructor(
    public dialogRef: MatDialogRef<FilterMediaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.isPhoto = this.data.mediaType === 'photos';
    if(this.isPhoto){
      this.mediaToFilter = <JnlPhoto[]>this.data.CurrentMedia;
    }else{
      this.mediaToFilter = <JnlVideo[]>this.data.CurrentMedia;
    }
    if(this.data.currentFilters){
      this.currentFilters = this.data.currentFilters;
    }
    this.filteredMedia = this.mediaToFilter
    this.filteredMedia.forEach((obj, idx) =>{
      obj.categories = obj.categories.split(',');
    })
    this.mediaToFilter.forEach((obj, idx)=>{
      let cats = obj.categories.split(',');
      this.categories = this.categories.concat(cats.filter(x => this.categories.every(y => y !== x)));
    })
    this.locations = Array.from(new Set((this.mediaToFilter as Array<JnlPhoto|JnlVideo>).map(obj => obj.physloc)));


  }

  filterMedia(filterOn){


    this.filteredMedia.forEach((obj, idx) =>{
      let objFiltered = false;
      if(this.currentFilters.enabled){
        if(this.currentFilters.udate.enabled){
          let objUdate = moment(obj.udate);
          if(this.currentFilters.udate.sDate){
            let UsDate = moment(this.currentFilters.udate.sDate)
            if(objUdate.isBefore(UsDate)){
              this.filteredMedia.splice(idx, 1);
              objFiltered = true;
            }
          }
          if(this.currentFilters.udate.eDate && !objFiltered){
            let UeDate = moment(this.currentFilters.udate.eDate)
            if(objUdate.isAfter(UeDate)){
              this.filteredMedia.splice(idx, 1);
              objFiltered = true;
            }
          }
        }

        if(this.currentFilters.tdate.enabled){
          let objTdate = moment(obj.tdate);
          if(this.currentFilters.tdate.sDate && !objFiltered){
            let TsDate = moment(this.currentFilters.tdate.sDate)
            if(objTdate.isBefore(TsDate)){
              this.filteredMedia.splice(idx, 1);
              objFiltered = true;
            }
          }
          if(this.currentFilters.tdate.eDate && !objFiltered){
            let TeDate = moment(this.currentFilters.tdate.eDate)
            if(objTdate.isAfter(TeDate)){
              this.filteredMedia.splice(idx, 1);
              objFiltered = true;
            }
          }
        }

        if(this.currentFilters.desc.enabled){
          if(!obj.desc.toLowerCase().includes(this.currentFilters.desc.filVal) && !objFiltered){
            this.filteredMedia.splice(idx, 1);
            objFiltered = true;
          }
        }

        if(this.currentFilters.ytlink.enabled && obj.hasOwnProperty('ytlink') && !objFiltered){
          let vidObj = <JnlVideo>obj;
          if(this.currentFilters.ytlink.withLink){
            if(!vidObj.ytlink){
              this.filteredMedia.splice(idx, 1)
            }
          }else{
            if(vidObj.ytlink){
              this.filteredMedia.splice(idx, 1)
            }
          }
        }

      }
    })

  }

  filterMediaByLocation(event: MatSelectionListChange, selList: MatSelectionList){
    this.currentFilters.physloc.filLocs = selList.selectedOptions.selected;
    this.filteredMedia.forEach((obj, idx) => {
      if(this.currentFilters.physloc.filLocs.indexOf(obj.physloc) === -1){
        this.filteredMedia.splice(idx, 1);
      }
    })
  }

  filterMediaByCategory(event: MatSelectionListChange, selList: MatSelectionList){
    this.currentFilters.categories.filCats = selList.selectedOptions.selected;
    this.filteredMedia.forEach((obj, idx) => {
      if(obj.categories.some(v => this.currentFilters.categories.filCats.indexOf(v) === -1)){
        this.filteredMedia.splice(idx, 1);
      }
    })
  }
}
