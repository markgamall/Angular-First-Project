import { Component, OnInit } from '@angular/core';
import { Postint } from '../int2';
import { PostsserviceService } from '../postsservice.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{
postobj:Postint[]=[];
  router: any;
postId: any;

constructor(private postservice:PostsserviceService){}
  ngOnInit(): void {
    this.postservice.getUsers().subscribe(
      (data: Postint[]) => {
        this.postobj = data;
      });
    }

}
