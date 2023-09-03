export function getConfig (cfg) {
  return {
    vid: '',
    moovEnd: 80000,
    segmentDuration: 2,
    maxDownloadInfoSize: 30,
    responseType: 'arraybuffer',
    cache: null,
    // ...xgplayer-streaming-shared/src/net/config
    ...cfg
  }
}
