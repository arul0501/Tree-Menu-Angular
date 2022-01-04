import { Component, OnInit, ChangeDetectionStrategy, EventEmitter } from '@angular/core';
import { Menu, File } from '../menu.model';

@Component({
  selector: 'tree-view-menu',
  inputs: [
		"expandedFolders",
		"rootFolder"
	],
	outputs: [
		"toggleFolderEvents: toggleFolder"
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './treeview.component.html',
  styleUrls: ['./treeview.component.css']
})
export class TreeviewComponent implements OnInit {
  //items: any = {};
 // data: any = '{"name":"countries","values":[{"name":"india","values":[{"name":"zones","values":[{"name":"north","values":[{"name":"states","values":[{"name":"punjab","value":[{"name":"population","value":"28000000"}]},{"name":"J&K","value":[{"name":"population","value":"1000000"}]}]}]},{"name":"south","values":[{"name":"states","values":[{"name":"tamil nadu","value":[{"name":"population","value":"67000000"}]},{"name":"kerala","value":[{"name":"population","value":"34000000"}]}]}]}]}]}]}';

//  @Input() menuList: any;
//   public roleName: string;    
//   data: any = "[{title:'Parent 1',routerLink:'/ap/dashboard',style:'fa fa-home',nodeId:'liDashboard',param:'',categories:[]},{title:'Parent 2',routerLink:'',style:'fa fa-users',nodeId:'liAssociates',param:'',categories:[{title:'Child 1',style:'fa fa-users',nodeId:'liProspectiveAssociate',param:'',routerLink:'/ap/associates/view',categories:[{title:'Grand Child 1',style:'fa fa-users',nodeId:'A',param:'',routerLink:'/ap/associates/view',categories:[{title:'Grand Grand Child 1',style:'fa fa-user-plus',nodeId:'D',param:'',routerLink:'/ap/reports/resourcereport',categories:[]},{title:'Grand Grand Child 2',style:'fa fa-user-plus',nodeId:'E',param:'',routerLink:'/ap/reports/financereport',categories:[]},{title:'Grand Grand Child 3',style:'fa fa-pencil-square',nodeId:'F',param:'',routerLink:'/ap/reports/importRMGreport',categories:[]}]},{title:'Grand Child 2',style:'fa fa-pencil-square',nodeId:'B',param:'',routerLink:'/ap/associates/prospective-associates',categories:[]},{title:'Grand Child 3',style:'fa fa-users',nodeId:'C',param:'',routerLink:'/ap/associates/list',categories:[]}]},{title:'Child 2',style:'fa fa-pencil-square',nodeId:'liAssociateJoining',param:'',routerLink:'/ap/associates/prospective-associates',categories:[]},{title:'Child 3',style:'fa fa-users',nodeId:'liAssociatesChild',param:'',routerLink:'/ap/associates/list',categories:[]}]},{title:'Parent 3',routerLink:'',style:'fa fa-users',nodeId:'liTalentManagement',param:'',categories:[]},{title:'Parent 4',routerLink:'',style:'fa fa-users',nodeId:'liTeamManagement',param:'',categories:[]},{title:'Parent 5',routerLink:'',style:'fa fa-users',nodeId:'liPerformanceManagement',param:'',categories:[]},{title:'Parent 6',routerLink:'',style:'fa fa-street-view',nodeId:'liAdmin',param:'',categories:[]},{title:'Parent 7',routerLink:'',style:'fa fa-users',nodeId:'liReports',param:'',categories:[]}]";  

  public expandedFolders!: string[];
	public rootFolder!: Menu;
	public toggleFolderEvents: EventEmitter<Menu>;

	// I initialize the folder-tree component.
	constructor() {

		this.toggleFolderEvents = new EventEmitter();

	}

	// ---
	// PUBLIC METHODS.
	// ---

	// I emit a toggle event for the given folder.
	public toggleFolder( target: Menu ) : void {

		this.toggleFolderEvents.emit ( target );

	}

 
  ngOnInit() {  
      
   }  

}
