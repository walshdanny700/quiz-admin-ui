import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from '../../model/tag';
import { TagService } from '../../service/tag.service';

@Component({
  selector: 'app-tag-form',
  templateUrl: './tag-form.component.html',
  styleUrls: ['./tag-form.component.css']
})
export class TagFormComponent {

  tag: Tag;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: TagService) {
    this.tag = new Tag();
  }

  onSubmit() {
    this.userService.save(this.tag).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/api/tags']);
  }
}
