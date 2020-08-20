import {load as loadFont} from "webfontloader";
import {readAsArrayBuffer} from "promise-file-reader";
import {parse as parseCSSFont} from "css-font";
import * as atlas from "./atlas";
import type {IOptions} from "./atlas";
import * as vs from "./variation-selector";
import * as bd from "./bindings";
import * as qr from "./queries";

bd.tabFontName.action = () => {
    if (qr.tabFontName.checked) {
        bd.fontName.action();
        atlas.refresh();
    }
};
bd.tabFontFile.action = () => {
    if (qr.tabFontFile.checked) {
        bd.fontFile.action(false);
        atlas.refresh();
    }
};
bd.fontName.action = () => {
    let value = qr.fontName.value.trim();
    if (value.length == 0) {
        value = options.font.family.join(" ");
    }
    qr.fontName.value = value;
    options.font.family = parseCSSFont(options.font.size + " " + value).family;
};
bd.fontFile.action = (update) => {
    const files = qr.fontFile.files as FileList;
    if (files.length > 0) {
        if (update) {
            readAsArrayBuffer(files[0]).then(async (arrayBuffer) => {
                const font = new FontFace("custom", arrayBuffer);
                await font.load();
                document.fonts.clear();
                document.fonts.add(font);
                atlas.refresh();
            }).catch(() => {
                qr.fontFile.value = "";
            });
        }
        options.font.family = ["custom"];
    } else {
        bd.fontName.action();
    }
};
bd.bitmapWidth.action = (update) => {
    if (update) {
        options.resolution[0] = parseInt(qr.bitmapWidth.value);
    }
    qr.impreciseHighlight(qr.bitmapWidth, options.resolution[0] % options.cell[0]);
};
bd.bitmapHeight.action = (update) => {
    if (update) {
        options.resolution[1] = parseInt(qr.bitmapHeight.value);
    }
    qr.impreciseHighlight(qr.bitmapHeight, options.resolution[1] % options.cell[1]);
};
bd.cellsRow.action = (update) => {
    if (update) {
        options.cell[0] = Math.floor(options.resolution[0] / parseInt(qr.cellsRow.value));
    } else {
        qr.cellsRow.value = Math.floor(options.resolution[0] / options.cell[0]) + "";
    }
    qr.impreciseHighlight(qr.cellsRow, options.resolution[0] % options.cell[0]);
};
bd.cellsColumn.action = (update) => {
    if (update) {
        options.cell[1] = Math.floor(options.resolution[1] / parseInt(qr.cellsColumn.value));
    } else {
        qr.cellsColumn.value = Math.floor(options.resolution[1] / options.cell[1]) + "";
    }
    qr.impreciseHighlight(qr.cellsColumn, options.resolution[1] % options.cell[1]);
};
bd.cellWidth.action = (update) => {
    if (update) {
        options.cell[0] = parseInt(qr.cellWidth.value);
    } else {
        qr.cellWidth.value = options.cell[0] + "";
    }
    qr.impreciseHighlight(qr.cellWidth, options.resolution[0] % options.cell[0]);
};
bd.cellHeight.action = (update) => {
    if (update) {
        options.cell[1] = parseInt(qr.cellHeight.value);
    } else {
        qr.cellHeight.value = options.cell[1] + "";
    }
    qr.impreciseHighlight(qr.cellHeight, options.resolution[1] % options.cell[1]);
};

bd.fontSize.action = () => {
    options.font.size = qr.fontSize.value + "pt";
};
bd.offsetX.action = () => {
    options.offset[0] = parseInt(qr.offsetX.value);
};
bd.offsetY.action = () => {
    options.offset[1] = parseInt(qr.offsetY.value);
};
bd.clipCells.action = () => {
    options.clip = qr.clipCells.checked;
};
bd.showGrid.action = () => {
    options.grid = qr.showGrid.checked;
};
bd.charset.action = () => {
    const value = [...new Set(vs.removeAll(qr.charset.value))].join("");
    qr.charset.value = vs.textStyle((value));
    options.charset = value;
};

const options = new class implements IOptions {
    context2D = qr.canvas.getContext("2d") as CanvasRenderingContext2D;
    //pure instantiation
    resolution = [1, 1] as [number, number];
    offset = [1, 1] as [number, number]
    cell = [1, 1] as [number, number];
    charset = "a";
    font = parseCSSFont("1pt serif");
    clip = false;
    grid = false;
};
atlas.setOptions(options);
bd.fire([...bd.standard, ...bd.sizes], true);
loadFont({
    classes: false,
    google: {
        families: [
            "Open Sans"
        ]
    },
    active: () => {
        atlas.refresh();
    }
});
bd.registerAll();