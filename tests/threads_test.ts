import { FfmpegClass } from "../mod.ts";
Deno.test({
    name: "threads feature",
    fn: async() => {
        await new FfmpegClass({
            ffmpegDir: "./ffmpeg/ffmpeg.exe",
            input: "./input.mp4"
        }).threads(8).save("./ree.mp4");
    },
    sanitizeOps: true,
    sanitizeResources: true
})
Deno.test({
    name: "threads feature with progress",
    fn: async() => {
        const thing = new FfmpegClass({
            ffmpegDir: "./ffmpeg/ffmpeg.exe",
            input: "./input.mp4"
        }).threads(8).saveWithProgress("./ree.mp4");
        for await (const progress of thing) {
            console.log(progress);
        }
    },
    sanitizeOps: true,
    sanitizeResources: true
})
Deno.test({
    name: "threads constructor feature",
    fn: async() => {
        await new FfmpegClass({
            ffmpegDir: "./ffmpeg/ffmpeg.exe",
            input: "./input.mp4",
            threads: 8
        }).save("./ree.mp4");
    },
    sanitizeOps: true,
    sanitizeResources: true
})
Deno.test({
    name: "threads constructor feature with progress",
    fn: async() => {
        const thing = new FfmpegClass({
            ffmpegDir: "./ffmpeg/ffmpeg.exe",
            input: "./input.mp4",
            threads: 8
        }).saveWithProgress("./ree.mp4");
        for await (const progress of thing) {
            console.log(progress);
        }
    },
    sanitizeOps: true,
    sanitizeResources: true
})