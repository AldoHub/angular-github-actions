import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { PostsService } from '../posts.service';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-main',
  imports: [CommonModule, RouterModule], 
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(
    private postsService: PostsService
  ){}

  posts$!: Observable<any[]>;

  public getPosts(){
     this.posts$ = this.postsService.getAllPosts();
  }

  
  ngOnInit(): void {
    this.getPosts();
    
  }

}
