import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { GitService } from 'src/app/data/services/git.service';
import { ApiError, ApiGetData, ApiGetDataError, ApiSuccess } from '../actions/git.action';

@Injectable()
export class GitEffects {

    constructor(
        private actions$: Actions,
        private gitApi: GitService
    ) { }

    getGitDataEffects$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApiGetData),
            tap(() => { console.log('Git Api in queue'); }),
            mergeMap((action) => {
                console.log('Git Api in process');
                return this.gitApi.gitUser(action.id).pipe(
                    map(res => ApiSuccess({ data: res })),
                    catchError(error => of(ApiError({ error }))),
                    tap(() => {
                        console.log('Git End');
                    })
                );
            })
        )
    });

    getGitDataErrorEffects$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(ApiGetDataError),
            tap(() => { console.log('Git Api Error in queue'); }),
            mergeMap((action) => {
                console.log('getGitDataErrorEffect running');
                return this.gitApi.gitError().pipe(
                    map(res => ApiSuccess({ data: res })),
                    catchError(error => of(ApiError({ error }))),
                    tap(() => {
                        console.log('getGitDataErrorEffect End');
                    })
                );
            })
        )
    });


}