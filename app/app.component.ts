import { Component } from '@angular/core';
import { Location } from "@angular/common";

// Import the application components and services.
import { Menu } from "./menu.model";
//import { generateData } from "./menu.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	public expandedFolders: string[];
	public rootFolder: Menu;

	private location: Location;

  dataList: any = '{"name":"countries","folders":[{"name":"india","folders":[{"name":"zones","folders":[{"name":"north","folders":[{"name":"states","folders":[{"name":"punjab","value":{"name":"population","value":"28000000"}},{"name":"J&K","value":{"name":"population","value":"1000000"}}]}]},{"name":"south","folders":[{"name":"states","folders":[{"name":"tamil nadu","value":{"name":"population","value":"67000000"}},{"name":"kerala","value":{"name":"population","value":"34000000"}}]}]}]}]}]}';

	// I initialize the app component.
	constructor( location: Location ) {

		// In order to make the demo more exciting, we're going to track the expanded
		// folders using the browser URL. This way, if you refresh the page, or pass the
		// URL to another team-member, the folder tree will return to the same expanded
		// state.
		// --
		// CAUTION: Since we are hacking this feature without the Router, the approach is
		// janky and is not intended to be seen as a best practice.
		this.location = location;

		this.expandedFolders = [];
    this.rootFolder = JSON.parse(this.dataList);
		//this.rootFolder = generateData();
    //console.log(this.rootFolder);

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I collapse all of the folders.
	public collapseAll() : void {

		// Since we are storing the expanded status of folders outside of the folder
		// tree data, in order to collapse all folders all we have to do is reset the
		// collection of ids.
		this.expandedFolders = [];
		//this.setExpandedFoldersToLocation( this.expandedFolders );

	}


	// I expand all of the folders.
	public expandAll() : void {

		var names: string[] = [];

		// Since the folder data is stored in a tree structure, in order to locate all
		// the UIDs (to track them as expanded), we'll have to start at the root of the
		// tree and then traverse all of the nodes.
		var foldersToExplore: Menu[] = [ this.rootFolder ];

		while ( foldersToExplore.length ) {

			var val = foldersToExplore.shift() !; // NOTE: Non-null assertion.

		//	uids.push( folder.uid );
			// Push all sub-folders onto the collection of folders to traverse while
			// looking for UIDs.
      //console.log(val);
			if(val.folders) {
       // console.log("--------------------------------");
        foldersToExplore.push( ...val.folders );
       // console.log(foldersToExplore);
      }

		}

		this.expandedFolders = names;
		this.setExpandedFoldersToLocation( this.expandedFolders );

	}


	// I get called once after the inputs have been bound for the first time.
	public ngOnInit() : void {

		this.expandedFolders = this.getExpandedFoldersFromLocation();

	}


	// I toggle the expanded status of the given folder.
	public toggleFolder( target: Menu ) : void {

   

		var index = this.expandedFolders.indexOf( target.name );

    //console.log("Expand Data", index);

		// If the folder is currently collapsed, expand it.
		if ( index === -1 ) {

			this.expandedFolders = this.expandedFolders.concat( target.name );

		// If the folder is currently expanded, collapse it.
		} else {

			this.expandedFolders = [
				...this.expandedFolders.slice( 0, index ),
				...this.expandedFolders.slice( index + 1 )
			];

		}

		//this.setExpandedFoldersToLocation( this.expandedFolders );

	}

	// ---
	// PRIVATE METHODS.
	// ---

	// I get the list of expanded folder UIDs from the browser URL.
	// --
	// CAUTION: I am using a very naive approach for this demo, in so much as I am not
	// using the Router and am, instead, just assuming the folder UIDs will be the only
	// values present in the entire query-string.
	private getExpandedFoldersFromLocation() : string[] {

		var search = this.location.path().split( "?" );

		if ( search.length === 2 ) {

			return( search[ 1 ].split( "," ) );

		} else {

			return( [] );

		}

	}


	// I save the list of expanded folder UIDs to the browser URL.
	// --
	// CAUTION: I am using a very naive approach for this demo, in so much as I am not
	// using the Router and am, instead, just assuming the folder UIDs will be the only
	// values present in the entire query-string.
	private setExpandedFoldersToLocation( names: string[] ) : void {

		this.location.replaceState( "", names.join( "," ) );

	}

}
