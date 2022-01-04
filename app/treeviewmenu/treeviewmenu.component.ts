import { Component, OnInit, EventEmitter, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Menu, File } from '../menu.model';

@Component({
  selector: "app-treeviewmenu",
	inputs: [
		"expandedFolders",
		"folder"
	],
	outputs: [
		"toggleFolderEvents: toggleFolder"
	],
	changeDetection: ChangeDetectionStrategy.OnPush,  
  templateUrl: './treeviewmenu.component.html',
  styleUrls: ['./treeviewmenu.component.css']
})
export class TreeviewmenuComponent implements OnInit {


  public expandedFolders!: string[];
	public folder!: Menu;
	public isExpanded: boolean;
  public isMenuArray: boolean;

	public toggleFolderEvents: EventEmitter<Menu>;
	
	// I initialize the folder component.
	constructor() {

		this.isExpanded = false;
    this.isMenuArray = false;

		this.toggleFolderEvents = new EventEmitter();

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I get called when any of the inputs bindings change.
	public ngOnChanges( changes: SimpleChanges ) : void {
   // console.log("111111111111111-------->", this.folder.name);
   // console.log(this.expandedFolders);
		// When either the folder or the list of expanded folders changes, let's check
		// to see if the current folder's expanded status has changed.
		this.isExpanded = ( this.expandedFolders.indexOf( this.folder.name ) !== -1 );

   // console.log("222222222222222222222222-------->", this.isExpanded);
   // this.isMenuArray = false;



	}


	// I emit a toggle event for the given folder.
	// --
	// CAUTION: This method may be invoked due to a local toggle action; or, as part of
	// the bubbling-up of a toggle action in a nested folder. In order to follow a one-
	// way data-flow, all toggle requests are bubbled-up instead of being applied
	// directly to the local view-state.
	public toggleFolder( target: Menu ) : void {

		this.toggleFolderEvents.emit( target );

	}
  

  ngOnInit(): void {
  }

}
