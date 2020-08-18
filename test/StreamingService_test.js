const StreamingService = artifacts.require('StreamingService');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var ini=0, fim=500;

contract('StreamingService', () =>{
    let streamingService = null;
    
    before(async () => {
        streamingService = await StreamingService.deployed();
    });

    it('Should deploy smart contract properly', async () => {
        console.log(streamingService.address);
        assert(streamingService.address !== '');
    });

    it('Add music "1" for "0xb4B3f517990b95E4e1F66d3996dDd0AFaA52a8FF"', async () => {
        await streamingService.addMusic(1, "0xb4B3f517990b95E4e1F66d3996dDd0AFaA52a8FF");
        const result = await streamingService.musicStats(1);
        assert(result);
    });

    it('Add musics "2" and "3" for "0x523A50D94D0ddb36656d1329f9dfDb9cFB61d39C"', async () => {
        await streamingService.addMusic(2, "0x523A50D94D0ddb36656d1329f9dfDb9cFB61d39C");
        await streamingService.addMusic(3, "0x523A50D94D0ddb36656d1329f9dfDb9cFB61d39C");
        for(var i = 2; i <= 3; i++){
            var result = await streamingService.musicStats(i);
            assert(result);
        }
    });

    it('Add musics "4", "5" and "6" for "0x47100E5BaF50A722891aABdE394e4d0eE0BD6f94"', async () => {
        await streamingService.addMusic(4, "0x47100E5BaF50A722891aABdE394e4d0eE0BD6f94");
        await streamingService.addMusic(5, "0x47100E5BaF50A722891aABdE394e4d0eE0BD6f94");
        await streamingService.addMusic(6, "0x47100E5BaF50A722891aABdE394e4d0eE0BD6f94");
        for(var i = 4; i <= 6; i++){
            var result = await streamingService.musicStats(i);
            assert(result);
        }
    });

    it('Add musics "7", "8", "9" and "10" for "0x86C61bF40281c21DA42c52F16551BCb15A674291"', async () => {
        await streamingService.addMusic(7, "0x86C61bF40281c21DA42c52F16551BCb15A674291");
        await streamingService.addMusic(8, "0x86C61bF40281c21DA42c52F16551BCb15A674291");
        await streamingService.addMusic(9, "0x86C61bF40281c21DA42c52F16551BCb15A674291");
        await streamingService.addMusic(10, "0x86C61bF40281c21DA42c52F16551BCb15A674291");
        for(var i = 7; i <= 10; i++){
            var result = await streamingService.musicStats(i);
            assert(result);
        }
    });

    it('Listen to the music 1', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(1);
            var result = await streamingService.getListen(1, i);
        }
        assert(result.toNumber()==res);
    });

    it('Listen to the music 2', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(2);
            var result = await streamingService.getListen(2, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 3', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(3);
            var result = await streamingService.getListen(3, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 4', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(4);
            var result = await streamingService.getListen(4, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 5', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(5);
            var result = await streamingService.getListen(5, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 6', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(6);
            var result = await streamingService.getListen(6, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 7', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(7);
            var result = await streamingService.getListen(7, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 8', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(8);
            var result = await streamingService.getListen(8, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 9', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(9);
            var result = await streamingService.getListen(9, i);
        }
        assert(result.toNumber()===res);
    });

    it('Listen to the music 10', async () => {
        var res = getRandomInt(ini, fim);
        for(var i = 1; i <= res; i++){
            await streamingService.listenMusic(10);
            var result = await streamingService.getListen(10, i);
        }
        assert(result.toNumber()===res);
    });

    after(async () => {
        console.log("=== RELATÓRIO DAS MÚSICAS: ===")
        for(var i = 1; i <= 10; i++){
            var result = await streamingService.musicStats(i);
            console.log("Música",i+": tocada", result.toNumber(), "vezes.");
        }

        console.log()
        console.log("=== RELATÓRIO DOS ARTISTAS: ===")
        var result = await streamingService.musicianStats("0xb4B3f517990b95E4e1F66d3996dDd0AFaA52a8FF");
        console.log("Artista 0xb4B3f517990b95E4e1F66d3996dDd0AFaA52a8FF tocado", result.toNumber(), "vezes.");
        result = await streamingService.musicianStats("0x523A50D94D0ddb36656d1329f9dfDb9cFB61d39C");
        console.log("Artista 0x523A50D94D0ddb36656d1329f9dfDb9cFB61d39C tocado", result.toNumber(), "vezes.");
        result = await streamingService.musicianStats("0x47100E5BaF50A722891aABdE394e4d0eE0BD6f94");
        console.log("Artista 0x47100E5BaF50A722891aABdE394e4d0eE0BD6f94 tocado", result.toNumber(), "vezes.");
        result = await streamingService.musicianStats("0x86C61bF40281c21DA42c52F16551BCb15A674291");
        console.log("Artista 0x86C61bF40281c21DA42c52F16551BCb15A674291 tocado", result.toNumber(), "vezes.");
    });
});

