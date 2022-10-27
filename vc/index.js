const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
})

app.get('/videoplayer', (req, res) => {
	const range = req.headers.range
	const videoPath = 'https://file-examples.com/storage/feb2e515cc6339d7ba1ffcd/2017/04/file_example_MP4_1920_18MG.mp4';
	const videoSize = fs.statSync(videoPath).size
	const chunkSize = 10 ** 6;
	const start = Number(range.replace(/\D/g, ""))
    console.log(start)
	const end = Math.min(start + chunkSize, videoSize - 1)
	const contentLength = end - start + 1;
	const headers = {
		"Content-Range": `bytes ${start}-${end}/${videoSize}`,
		"Accept-Ranges": "bytes",
		"Content-Length": contentLength,
		"Content-Type": "video/mp4"
	}
	res.writeHead(206, headers)
	const stream = fs.createReadStream(videoPath, {
		start,
		end
	})
	stream.pipe(res)
})
app.listen(3000, ()=>{
    console.log('sss')
});
