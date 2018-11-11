import { Component, OnInit } from '@angular/core';
import { WordpressService } from './wordpress.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  articles = []
  newPosts = []
  stickyPost = {}
  constructor(private wordpress: WordpressService) { }

  ngOnInit() {
    this.wordpress.getPosts().subscribe((articles: any) => {
      this.articles = articles.posts;
    });
    this.wordpress.getStickyPost().subscribe((article: any) => {
      this.stickyPost = article.posts[0];
      console.log(article)
    });
    this.wordpress.getNewPosts().subscribe((articles: any) => {
      this.newPosts = articles.posts;
      console.log(articles)
    });
  }

}
