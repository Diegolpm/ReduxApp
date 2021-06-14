import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Rect } from 'src/app/data/models/rect';
import * as main from 'src/app/common/ngrx/actions';
import * as mainCharSelector from 'src/app/common/ngrx/selectors/mainchar.selector';
import { fromRoot } from 'src/app/common/ngrx/index.git';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;
  requestId: any;
  rect: any;

  right = false;
  left = false;

  mainChar$: Observable<any>;
  speed$: Observable<number>;

  git$: Observable<any>;

  constructor(public render: Renderer2,
    private store: Store<{ mainChar: any }>,
    private gitStore: Store<{ gitState: any }>) {

    this.mainChar$ = store.select('mainChar');
    this.speed$ = store.select(mainCharSelector.getSpeed);

  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.rect = new Rect(this.ctx, 0, 50, 100, 'red');

    setInterval(() => {
      this.draw();
    }, 1);


    this.render.listen('document', 'keydown', (e: any) => {
      if (e.key === 'ArrowRight') {
        this.right = true;
      } else if (e.key === 'ArrowLeft') {
        this.left = true;
      }
    });

    this.render.listen('document', 'keyup', (e: any) => {
      this.right = false;
      this.left = false;
    });
  }

  draw() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, this.canvas.nativeElement.height - 40, this.canvas.nativeElement.width, 40);
    if (this.right) {
      this.rect.moveRight();
    } else if (this.left) {
      this.rect.moveLeft();
    }
    this.rect.draw();

    this.speed$ = this.store.select(mainCharSelector.getSpeed);

    this.requestId = requestAnimationFrame(() => this.draw);
  }

  public normal() {
    this.store.dispatch(main.normal());
    this.mainChar$.subscribe(res => {
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
  }

  public speed(s: number) {
    this.store.dispatch(main.speed({ s }));
    this.mainChar$.subscribe(res => {
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
  }

  public slow(s: number) {
    this.store.dispatch(main.slow({ s }));
    this.mainChar$.subscribe(res => {
      this.rect.speed = res.speed;
      this.rect.w = res.w;
      this.rect.h = res.h;
      this.rect.color = res.color;
    });
  }

  getApiData() {
    this.gitStore.dispatch(fromRoot.ApiGetData({ id: 'ctmil' }));
    this.store.subscribe(a => console.log(a));
  }

  getError() {
    this.gitStore.dispatch(fromRoot.ApiGetDataError({ id: 'ctmil' }));
    this.store.subscribe(a => console.log(a));
  }

}
