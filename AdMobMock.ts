import {AdMob, AdMobOptions} from "@ionic-native/admob";
import {Observable} from "rxjs";

export class AdMobMock extends AdMob {

    setOptions(options: AdMobOptions): Promise<any> {
        return new Promise(() => {
        });
    }

    createBanner(adIdOrOptions: string | AdMobOptions): Promise<any> {
        return new Promise(() => {
        });
    }

    showBanner(position: number): void {
        return;
    }

    prepareInterstitial(adIdOrOptions: string | AdMobOptions): Promise<any> {
        return new Promise(() => {
        });
    }

    showInterstitial(): void {
        return
    }

    prepareRewardVideoAd(adIdOrOptions: string | AdMobOptions): Promise<any> {
        return new Promise(() => {
        });
    }

    showRewardVideoAd(): void {
        return
    }

    onAdLoaded(): Observable<any> {
        return new Observable();
    }

    onAdDismiss(): Observable<any> {
        return new Observable();
    }

    removeBanner(): void {
        return
    }

    showBannerAtXY(x: number, y: number): void {
        return
    }

    hideBanner(): void {
        return
    }

    getAdSettings(): Promise<any> {
        return new Promise(() => {
        });
    }

    onAdFailLoad(): Observable<any> {
        return new Observable();
    }

    onAdPresent(): Observable<any> {
        return new Observable();
    }

    onAdLeaveApp(): Observable<any> {
        return new Observable();
    }
}