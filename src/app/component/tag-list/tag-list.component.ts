import { Component, OnInit } from '@angular/core';
import { Tag } from '../../model/tag';
import { TagService } from '../../service/tag.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {
  tags: Tag[];

  constructor(private tagService: TagService) {
  }

  ngOnInit() {
    this.tagService.findAll().subscribe(data => {
      this.tags = data;
    });
  }

}
