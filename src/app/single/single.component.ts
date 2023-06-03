import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor(
    private postsService: PostsService,
    private route: ActivatedRoute,
  ){}
    
  public post!: any;
  public postSubscription!: Subscription;
  public currentId: any = this.route.snapshot.paramMap.get("id");  
  
  public getPost(){
    this.postSubscription = this.postsService.getPostById(this.currentId)
    .subscribe(post => {
     this.post = post;
    });
  }
  
  ngOnInit(): void {
    this.getPost();
    
  }
}
