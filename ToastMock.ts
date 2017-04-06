import {Toast, ToastOptions} from "@ionic-native/toast";
import {Observable} from "rxjs";

export class ToastMock extends Toast {

    show(message: string, duration: string, position: string): Observable<any> {
        return Observable.empty();
    }

    hide(): Promise<any> {
        return new Promise(() => {});
    }

    showWithOptions(options: ToastOptions): Observable<any> {
        return Observable.empty();
    }

    showShortTop(message: string): Observable<any> {
        return Observable.empty();
    }

    showShortCenter(message: string): Observable<any> {
        return Observable.empty();
    }

    showShortBottom(message: string): Observable<any> {
        return Observable.empty();
    }

    showLongTop(message: string): Observable<any> {
        return Observable.empty();
    }

    showLongCenter(message: string): Observable<any> {
        return Observable.empty();
    }

    showLongBottom(message: string): Observable<any> {
        return Observable.empty();
    }
}