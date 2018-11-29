import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WordpressService } from '../wordpress.service';

@Component({
  selector: 'app-individual-post',
  templateUrl: './individual-post.component.html',
  styleUrls: ['./individual-post.component.scss']
})
export class IndividualPostComponent implements OnInit {
  post: any
  constructor(private route: ActivatedRoute, private wordpress: WordpressService) { }

  ngOnInit() {
    this.route.data.subscribe((data:{post: any}) => {
        this.post = data.post;
        this.wordpress.getRelatedPost(data.post.ID).subscribe(data => {
          console.log(data)
        })
    });
  }

}
