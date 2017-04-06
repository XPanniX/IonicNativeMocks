import {Clipboard} from "@ionic-native/clipboard";

export class ClipboardMock extends Clipboard {

    copy(text: string): Promise<any> {
        return new Promise(() => {});
    }

    paste(): Promise<any> {
        return new Promise(() => {});
    }
}