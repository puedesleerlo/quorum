import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-individual-post',
  templateUrl: './individual-post.component.html',
  styleUrls: ['./individual-post.component.scss']
})
export class IndividualPostComponent implements OnInit {
  post: any
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:{post: any}) => {
        this.post = data.post;
      
    })
  }

}
