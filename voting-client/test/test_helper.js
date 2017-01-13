/**
 * Created by Owner on 1/13/2017.
 */
import jsdom from "jsdom";

const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
const win = doc.defaultView;

global.document = doc;
global.window = win;