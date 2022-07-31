import { Sequence, useCurrentFrame, useVideoConfig, Video } from "remotion";
 
const urls = [
  "https://cdn.kapwing.com/C0083-D9ExrZGrD.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=XXKcM1ITX%2FGkk1voe79BN8ThyeUc4PKgiTShNIT1WyVECer5wKtRMsdtOopEWTyM0fNqLt7aKHdx8ZdTCOXetCQ%2BrLsgDCs5q%2FB6O%2FmsO%2FDfkxDAjdgWY4UrHDmnJlhoWUROEhSgDd8hCjVkrzDYmFyG8BtlxnJ4pNYvwf7zDyhib2vyJ1ykUpXXUPyjpRMqoCAUskievXmv2ON61x2F%2FjILCtBzDwugL1CZe2CHPG1u2sfWDlBPSGO%2FJHRj39iu8cWW7SZGGZEq%2BqElNo%2BRJ%2BjEAVmgzouY0Mvq9njzeP7aLZUOwd7x5hkiI9XEa4YqTmELQmaTj%2Bbr%2BykL2OhSoA%3D%3D",
  "https://cdn.kapwing.com/C0020-dMATQ48ij.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=F9kQkV9%2Fp6w1OYrxObASZozg1DWxJMINB6Ph5CvXfGs%2FZdILjCJrhI9DF7Ei64ZYNB1SbIKc9c0mOBydl8PmzT5ztql7TNM7xtdHW8yxi9NSbpRPPgqQcVq3K%2FO%2Bwjukn1VRD1a8kGxMvF0X4aCjO1xWTYJRokdWNzGCDbCOKpzkR0yi7RV4M9l2EsBrpy0C3Rmdh9L0YpLJpXwY9b2fQGrakSmR%2BXakaikvjeye4XPL0uKpVBe90DZcdAKNSPyolwPdMuXfa9MikCgiRhEOhcG9tn8dWwvf8onwa9aKroae3BVUwoglvVFbbhchMV5YlPmLCaRhdDczBGUN%2BDXgfA%3D%3D",
  "https://cdn.kapwing.com/C0224-i6IakrJ-Y.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=hhxzjWyd6oMx065HHl%2Fgnv1cpPCnZpm3vFz7DPt6z30NYQrtpOmHKKCxVKlz4YpnXPRjMPbxAXuv5lbFp6S1QVQ%2F0EZGhOq88bFtbLZjdHlp41vKXE%2FYLJiJzFQAlaTcOyJyyVOq4d2KUgw7zNBmvuEcQY%2FpBhI8VzNRYy0dMKM%2FVToZ%2BtqST9W8fAKXIBdk2cxjHonLnek2nav%2BuhnQ9%2F4ZF4obmYhWjmPOM%2BpUorq2FHBS%2BfM96Mr%2FXVfdU67yKSAW9W08ll8D6OCpfSEpvL78yVLoBEeuZFBcp%2FlAN65rFWDncM3fayRCa9TTma3yRDLJjI8EEOOcxByOvOEeGA%3D%3D"
]

const layers = [
  {
      "gcsShortId": "52mtrioWp",
      "id": "afc4280c-9e90-4074-9a70-15b5d3127ff3",
      "url": "https://cdn.kapwing.com/C0083-D9ExrZGrD.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=XXKcM1ITX%2FGkk1voe79BN8ThyeUc4PKgiTShNIT1WyVECer5wKtRMsdtOopEWTyM0fNqLt7aKHdx8ZdTCOXetCQ%2BrLsgDCs5q%2FB6O%2FmsO%2FDfkxDAjdgWY4UrHDmnJlhoWUROEhSgDd8hCjVkrzDYmFyG8BtlxnJ4pNYvwf7zDyhib2vyJ1ykUpXXUPyjpRMqoCAUskievXmv2ON61x2F%2FjILCtBzDwugL1CZe2CHPG1u2sfWDlBPSGO%2FJHRj39iu8cWW7SZGGZEq%2BqElNo%2BRJ%2BjEAVmgzouY0Mvq9njzeP7aLZUOwd7x5hkiI9XEa4YqTmELQmaTj%2Bbr%2BykL2OhSoA%3D%3D",
      "name": "C0083.MP4",
      "source": "upload",
      "objectFit": "cover",
      "addedFromMediaLibrary": true,
      "asset_id": "627f1f5a39820500582efd1c",
      "cmlFileId": "627f1f5f39820500582efd20",
      "mime": "video/mp4",
      "duration": 7.51,
      "hasAudio": true,
      "height": 1080,
      "width": 1920,
      "type": "video",
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "timelineRow": 0,
      "volume": 1,
      "optimization_id": null,
      "uploadConfirmed": 1659248364172,
      "videoDelay": 12.851073,
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/627f1f694a32c1ba0dddad6c_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=ih%2Fzy8c3yiSKCXHhVjxLGrdKxVNxHAxWGtnMLWAjewtN2Ml%2FpNOmxnpolNCBgiz1gib%2FdUzPogJUATOGYflE0yo7pGPL3uyX%2BoQUIHrTkmnZD8UyhHL%2FzzpIBzkIIaUYJLTGcudAeOO%2FFBdJ777Ek%2FLIJg8tBo%2BiPovubk0b0TkOC0nLPQ3vQKo1JG7u7%2BDBjKP%2FS3gc7kIAnyJN1u1GXh5Lq1XVzDqbnrEBYbmBjuq%2F%2FzhsYfaqeYFSsOOhSogiyeMaEWM%2FLOCXl9mnyTIwoe5pRbftk7e%2BzbXiPcRQW5yB2q2QJiV9Uzr%2FgeOzXTGqVEiHIAajbc%2FlUPPZ2BOvew%3D%3D",
          "asset_id": "627f200d4a32c1ba0dddad72",
          "width": 852,
          "height": 480,
          "duration": 7.51,
          "endTime": 7.51,
          "startTime": 0,
          "mediaLibraryID": "3f33fdaa-dd7c-4a85-9932-b9766e9dc6a1"
      },
      "track_preview": {
          "url": "https://storage.googleapis.com/kapwing/conversions/627f1f694a32c1ba0dddad6c_track_preview.mp4",
          "asset_id": "627f200e4a32c1ba0dddad74",
          "mediaLibraryID": "3f33fdaa-dd7c-4a85-9932-b9766e9dc6a1",
          "hasAudio": true
      },
      "isTrimmed": true,
      "startTime": 0,
      "endTime": 5.033541,
      "local_url": ""
  },
  {
      "gcsShortId": "kGZHlDYMR",
      "id": "6f53be57-95a3-41be-a9b0-5ae9770b8b73",
      "name": "C0020.MP4",
      "size": 113272381,
      "mime": "video/mp4",
      "fileSizeChecked": true,
      "source": "upload",
      "objectFit": "cover",
      "uploadId": "3aedd6bd-c96b-47b8-9c76-5e7166d2312e",
      "uploadLocation": "dragUpload",
      "isMediaLibraryUpload": false,
      "hasAudio": true,
      "duration": 15.52,
      "height": 1080,
      "type": "video",
      "width": 1920,
      "startTime": 0,
      "endTime": 12.851073,
      "timelineRow": 0,
      "videoDelay": 0,
      "originalName": "C0020.MP4",
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "volume": 1,
      "isTrimmed": true,
      "url": "https://cdn.kapwing.com/C0020-dMATQ48ij.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=F9kQkV9%2Fp6w1OYrxObASZozg1DWxJMINB6Ph5CvXfGs%2FZdILjCJrhI9DF7Ei64ZYNB1SbIKc9c0mOBydl8PmzT5ztql7TNM7xtdHW8yxi9NSbpRPPgqQcVq3K%2FO%2Bwjukn1VRD1a8kGxMvF0X4aCjO1xWTYJRokdWNzGCDbCOKpzkR0yi7RV4M9l2EsBrpy0C3Rmdh9L0YpLJpXwY9b2fQGrakSmR%2BXakaikvjeye4XPL0uKpVBe90DZcdAKNSPyolwPdMuXfa9MikCgiRhEOhcG9tn8dWwvf8onwa9aKroae3BVUwoglvVFbbhchMV5YlPmLCaRhdDczBGUN%2BDXgfA%3D%3D",
      "asset_id": "627f1fba84e6ee009a463f3f",
      "ffprobeData": {
          "r_frame_rate": "120000/1001",
          "avg_frame_rate": "120000/1001",
          "rotate": "0",
          "codec_name": "h264",
          "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
          "duration": "15.520000"
      },
      "uploadConfirmed": 1659248364155,
      "cmlFileId": "627f1fbe84e6ee009a463f40",
      "optimization_id": null,
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/627f1fc04a0cd6ea4d68f1a5_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=QoM7A%2BjiMh1yHhz6hCxUvsXztm7mHog1wZ4E9%2BBwaF%2BV2HoThYxJATxkSUYvByZZ%2BHxKgcb7TkFJpTBUASN2aaX3Ss0nkJUmKrbxQXr7NICoX38bnl5sNIaX2ggMKqyNAYVA%2BBnMTA6m5exK%2Fic9%2BAMtTJgVH8evxaM28jDGNK3xbcZPxFdkhPhOv30uk1%2F1jFEV%2FJVILUVTLBgQTAIRkHN65jz%2FiOEdzxT2mTnbgRUaOaml8goj7K46r3%2Fqg0gS3y6uOB0jOWpg2b%2BjobduPkUZzVrJ9L4KhyGdBQbBex8W43IBgMVtQ6D1JlFqv8P9YCSB93j1NG4pm9v2XxU05Q%3D%3D",
          "asset_id": "627f204e4a0cd6ea4d68f1b1",
          "width": 852,
          "height": 480,
          "duration": 15.52,
          "endTime": 15.52,
          "startTime": 0,
          "mediaLibraryID": "879e695b-7791-460e-bb19-079b629cf7bc"
      },
      "track_preview": {
          "url": "https://storage.googleapis.com/kapwing/conversions/627f1fc04a0cd6ea4d68f1a5_track_preview.mp4",
          "asset_id": "627f204e4a0cd6ea4d68f1b3",
          "mediaLibraryID": "879e695b-7791-460e-bb19-079b629cf7bc",
          "hasAudio": true
      },
      "local_url": ""
  },
  {
      "gcsShortId": "J9GmOgp0h",
      "id": "d791636c-6970-47f9-98b5-90dd6e5861fc",
      "name": "C0224.MP4",
      "size": 276881256,
      "mime": "video/mp4",
      "fileSizeChecked": true,
      "source": "upload",
      "objectFit": "cover",
      "uploadId": "c20cd8c1-dd84-44e8-a695-2a3db8f4da23",
      "uploadLocation": "dragUpload",
      "isMediaLibraryUpload": false,
      "hasAudio": true,
      "duration": 36.54,
      "height": 1080,
      "type": "video",
      "width": 1920,
      "startTime": 0,
      "endTime": 29.68842399999999,
      "videoDelay": 17.884614,
      "originalName": "C0224.MP4",
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "timelineRow": 0,
      "volume": 1,
      "url": "https://cdn.kapwing.com/C0224-i6IakrJ-Y.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=hhxzjWyd6oMx065HHl%2Fgnv1cpPCnZpm3vFz7DPt6z30NYQrtpOmHKKCxVKlz4YpnXPRjMPbxAXuv5lbFp6S1QVQ%2F0EZGhOq88bFtbLZjdHlp41vKXE%2FYLJiJzFQAlaTcOyJyyVOq4d2KUgw7zNBmvuEcQY%2FpBhI8VzNRYy0dMKM%2FVToZ%2BtqST9W8fAKXIBdk2cxjHonLnek2nav%2BuhnQ9%2F4ZF4obmYhWjmPOM%2BpUorq2FHBS%2BfM96Mr%2FXVfdU67yKSAW9W08ll8D6OCpfSEpvL78yVLoBEeuZFBcp%2FlAN65rFWDncM3fayRCa9TTma3yRDLJjI8EEOOcxByOvOEeGA%3D%3D",
      "asset_id": "62a8e7314a1c03004cd7c08a",
      "ffprobeData": {
          "r_frame_rate": "120000/1001",
          "avg_frame_rate": "120000/1001",
          "rotate": "0",
          "codec_name": "h264",
          "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
          "duration": "36.540000"
      },
      "uploadConfirmed": 1659248364187,
      "cmlFileId": "62a8e73b4a1c03004cd7c08b",
      "optimization_id": null,
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/62a8e73fb28d0110995315bb_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277165&Signature=Aq9gPJwKyO8NA0A4hxsdXAQB3xoCglfGOkUfjLg8VEfaD%2BGYNEbP4TGs1UdCWD8I4K6jS0E3qYOM3%2F9BS7%2FYxvNCJPUnZSnH0jd%2B%2By5nMan5wEqRYlYQIOooYBi4Dses2cZBVVhpEfgHZR5Qg%2B2VTvo1fAtphtURxvunumz6ByCxiHv5D84YfHPwTYLkU3lBdBGd7OM9B86W2iv28HrOmCuTVBZXkawenAXwKxTmietbMLxPspxCtHw0EkiznZkJ%2FbrF4F%2BHJixeA1c7nnwfkTpmes6JEnisOvoi7TJr8KsVW%2F0YJNnnxCwXNuasphnboIWOCNLEwo%2B9J3JBMnGjeQ%3D%3D",
          "asset_id": "62a8e7e4b28d0110995315bc",
          "width": 852,
          "height": 480,
          "duration": 36.54,
          "endTime": 36.54,
          "startTime": 0,
          "mediaLibraryID": "58f9cd4f-6b0a-42b7-b756-1955d37cb7cf"
      },
      "track_preview": {
          "url": "https://cdn.kapwing.com/conversions/62a8e73fb28d0110995315bb_track_preview.mp4",
          "asset_id": "62a8e7e4b28d0110995315be",
          "mediaLibraryID": "58f9cd4f-6b0a-42b7-b756-1955d37cb7cf",
          "hasAudio": true
      },
      "isTrimmed": true,
      "local_url": ""
  },
  {
      "gcsShortId": "_Ex2wQlMU",
      "id": "bde4a8a5-31f1-494d-ae30-c5440f1b57a7",
      "name": "C0414.MP4",
      "size": 50344763,
      "mime": "video/mp4",
      "fileSizeChecked": true,
      "source": "upload",
      "objectFit": "cover",
      "uploadId": "15f78209-bb49-44a1-b94a-436cf7dc829b",
      "uploadLocation": "dragUpload",
      "isMediaLibraryUpload": false,
      "hasAudio": true,
      "duration": 6.51,
      "height": 1080,
      "type": "video",
      "width": 1920,
      "startTime": 0,
      "endTime": 6.51,
      "videoDelay": 47.573038,
      "originalName": "C0414.MP4",
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "timelineRow": 0,
      "volume": 1,
      "url": "https://cdn.kapwing.com/C0414-7-BPeDT5Mm.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=A3EmU4s75OCFqgEb9EPagpuiTbtMfmUfoqoZP0xawNvmE64iodCBAST9wMALBLCjBGKW%2BPYXa8N98fIqn6nghvOOhjht7JntWJLjRVV2K8na%2F%2FHyvEKTUe%2Fckx3W19ONY2AG3XK7g77wjWfpNgYkpAn23vcXHBmK2slmj68ivD%2F74BHbUYS8H1t3JNkAmOWBRPxPIw%2FlrcU6BgYjkpkZLAmlQFrDFDWi4ij9C0I4KG0uRCZWweAwdRjOT3ovQQyusSx5uUdeFNx0grSFSU%2Fu9AHmMBmYc7eLhyCRepfOBQfEX49aJ%2B5OThG85yz5Pi67mWb06uyk8MJmkIpWkmJEIA%3D%3D",
      "asset_id": "62ce52e6e7a888007879bea1",
      "ffprobeData": {
          "r_frame_rate": "120000/1001",
          "avg_frame_rate": "120000/1001",
          "rotate": "0",
          "codec_name": "h264",
          "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
          "duration": "6.510000"
      },
      "uploadConfirmed": 1659248364382,
      "cmlFileId": "62ce52e9e7a888007879bea4",
      "optimization_id": null,
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/62ce52ec85ec40661fe05eb6_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277165&Signature=HUBpMsRYZRnq%2BEDJed5pU9HmNlfa5Ng9u0iMQD8bvvaHXFocgLV2qzJbK9av1d4DVPS1Uz%2FYrelSziQN5Kfp11h5gAZqX0PK0bHgVS4yKz7JDHPA4NBBbP4UdeZJK2M6HbaTeeuwHEkEnTX6FXFT6TWlwnCzqSvxiKSCVdTaoJPfcitrgZ%2FJ0Itai%2Fsm8SoDktx2jEcKudObumgK%2FwPW%2BW%2FPIEJQp%2Fh%2FW3B3sw8ZYNIwf6fWudxSVzJbH2jpVOfw2RmLxC%2FZoc5moN7D05BqI4gDqLBXELc3O34B3g6bnnG1N3iXMNgE0tJYmsFxGClceaP%2B5HSD7BW13738lUCXew%3D%3D",
          "asset_id": "62ce537285ec40661fe05eb7",
          "width": 852,
          "height": 480,
          "duration": 6.51,
          "endTime": 6.51,
          "startTime": 0,
          "mediaLibraryID": "4e952f6e-9954-404c-836a-f1109b8af388"
      },
      "track_preview": {
          "url": "https://cdn.kapwing.com/conversions/62ce52ec85ec40661fe05eb6_track_preview.mp4",
          "asset_id": "62ce537285ec40661fe05eb9",
          "mediaLibraryID": "4e952f6e-9954-404c-836a-f1109b8af388",
          "hasAudio": true
      },
      "local_url": ""
  },
  {
      "gcsShortId": "Hjm2mahAN",
      "id": "b1d00d1a-2f53-4401-a7a3-af9918b5986b",
      "name": "C0233.MP4",
      "size": 138442765,
      "mime": "video/mp4",
      "fileSizeChecked": true,
      "source": "upload",
      "objectFit": "cover",
      "uploadId": "47344398-b587-44ce-9653-c355fa483a44",
      "uploadLocation": "dragUpload",
      "isMediaLibraryUpload": false,
      "hasAudio": true,
      "duration": 18.52,
      "height": 1080,
      "type": "video",
      "width": 1920,
      "startTime": 0,
      "endTime": 16.883028125000003,
      "videoDelay": 54.083037999999995,
      "originalName": "C0233.MP4",
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "timelineRow": 0,
      "volume": 1,
      "isTrimmed": true,
      "url": "https://cdn.kapwing.com/C0233-RHgAS2z4t.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=KAfOsnsHVWK68l43Vp7E%2FuxOfnVlkjdjAc5ko1ziQ17WvweFQ2lKNNFiBXw0WDSo8llnr2XAezZ2HTfrhLJXiyykhCCaj4YUaMAvuDXkawbS2jNsgpvOhjc1JnfgrOrCqQfer2bLJBVu%2F%2FDJBi6if0WoIuvj7gRrqcPo%2BJFTcSKQdP2T25Zw3rTuQT1ve3kEwcAv0TX72ssGjE1s8Pu8mDOHnLM7hwWiSjdNVZU0462q%2FSn%2BVRk02CP%2Fk%2B5wC9M4NySZqygQ%2BrUmQle1E6cXSDHFu8vqehy4xEQrI%2FQplbjAnaULwOIE%2FB%2BCsKCrMlFWz7LWproODeJjTeK2Qc9Ngw%3D%3D",
      "asset_id": "62e36ee3b0fab100afdda6d5",
      "ffprobeData": {
          "r_frame_rate": "120000/1001",
          "avg_frame_rate": "120000/1001",
          "rotate": "0",
          "codec_name": "h264",
          "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
          "duration": "18.520000"
      },
      "uploadConfirmed": 1659248364399,
      "cmlFileId": "62e36ee4b0fab100afdda6da",
      "optimization_id": null,
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/62e36ee7a8a5e468894b2ea6_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277165&Signature=JvVp1SA5U6jrUWaaQd6YxQe3TWk3e0cc0Hohvp30hNCaqrnAP305%2FiUVnWNJRQsys7jYDyU%2B5Jyt7BeaGDNnDfVRDfdN1FSs%2BOVwqxzPrJpdZUzZJcI1Hv7gili0tFGHXmb4qpF5K%2FVheDBpsW85lWz9vMZMa%2F1gVrGq2kHOKQkAvfSVVhP%2By5cFFUIzUJ0H0O37LmZV1I8LV91roYnfUn6Q6aAdyQoRG5kjtaKUHuKHmTJPSeU8xkKa3irkuji8BJu94O%2B9sYUv%2B2VZUrCWw3Z1U02EOwZdzPQFtY9pyE8jr2Qxeq73wlKqYXTxFcD4bv0dazEu%2FVeGsihHYL%2Bl%2Fg%3D%3D",
          "asset_id": "62e36f8da8a5e468894b2eb1",
          "width": 852,
          "height": 480,
          "duration": 18.52,
          "endTime": 18.52,
          "startTime": 0,
          "mediaLibraryID": "e6c191f7-4904-470d-999b-f6cb9037a6d1"
      },
      "track_preview": {
          "url": "https://cdn.kapwing.com/conversions/62e36ee7a8a5e468894b2ea6_track_preview.mp4",
          "asset_id": "62e36f8ea8a5e468894b2eb3",
          "mediaLibraryID": "e6c191f7-4904-470d-999b-f6cb9037a6d1"
      },
      "local_url": ""
  },
  {
      "gcsShortId": "7kMYawyVs",
      "id": "81f47dd8-50ea-4340-9adf-fde96f7f05b6",
      "url": "https://cdn.kapwing.com/C0221-k7l8NnWGE2.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=H6QRGXAa6iNJ3eaqX%2BDHFLOsMIuWrZW2rFR46XCpzozvLJi4yaFG3mgptwTYeNJK1NZPyUKQLVOg7FSrXYk4J9ssgc7XXmPEUdjBDO7l8k6MkKsY5fXwfCsXW35SvUIeEjX%2FKaTGkOYfDVc5ro8M%2BFooaj2OUURGtCgoCZrYcZauMxIK4BrOMKqMgE3NtWmGhwGg2SJWY00eVis2LpFbbBHB%2Bm4aYIOvaDloGpigEHuMKM4rigxRLD0uZzVxbmRSvm%2Be%2BI394kH16W2zkO7WiwsAMAgHiRKFokrAivvEZY7HuDfWbhY4R0O4GF0RQDtdX5wyrhmB051gPX7njZZ%2BRQ%3D%3D",
      "name": "C0221.MP4",
      "source": "upload",
      "objectFit": "cover",
      "addedFromMediaLibrary": true,
      "asset_id": "62e370588b5d7500b9e64298",
      "cmlFileId": "62e3705b8b5d7500b9e6429f",
      "mime": "video/mp4",
      "width": 1920,
      "height": 1080,
      "duration": 5.005,
      "hasAudio": true,
      "type": "video",
      "videoDelay": 70.966066125,
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "timelineRow": 0,
      "volume": 0,
      "optimization_id": null,
      "uploadConfirmed": 1659248364355,
      "isTrimmed": true,
      "startTime": 0,
      "endTime": 3.9377378906250016,
      "detachedAudioId": "c0412d3d-d560-4fc0-8412-ddeccd925527",
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/62e374508cdf8fb7bdb178f4_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277165&Signature=Xq8du31ofz%2F6bObyznWz6J1OluyVOmHy2ArXn9Uz4azWG3%2BSM2%2BhLP%2FUk1dyc2h9WjjF0YGlfBUdm30GVpadoNOZThvGTd4mB49yU3Px1qUmiTyLXtLxGFSVAquRzgqJ2gBV1Ie6Sll6J5%2B%2FfOxOx7M%2FkzU1TeVl3AoYu9HTL%2BoJ7OeMF5BGm0hJ%2B%2FSgSZNP8dF%2Fo8%2F%2Bjq7zE4pCmNYRCmXkcYdSb3eJ0kf5AGKr6%2Ff93wNbaTUkUiojIYBHUqDyqS7Zmqp8yfvcD1hKhKda%2F138MIKpq0fjUmcvjn3rWBr7SriVmr8MNlZ6d%2BloSuPqQ4MH4EWLzJcN6XD0kBMzQA%3D%3D",
          "asset_id": "62e374a08cdf8fb7bdb178f5",
          "width": 852,
          "height": 480,
          "duration": 5.005,
          "endTime": 5.005,
          "startTime": 0,
          "mediaLibraryID": "f384ff56-ab34-4a0d-ae20-2a6ae5044c80"
      },
      "track_preview": {
          "url": "https://cdn.kapwing.com/conversions/62e374508cdf8fb7bdb178f4_track_preview.mp4",
          "asset_id": "62e374a18cdf8fb7bdb178f7",
          "mediaLibraryID": "f384ff56-ab34-4a0d-ae20-2a6ae5044c80"
      },
      "local_url": ""
  },
  {
      "gcsShortId": "7kMYawyVs",
      "id": "e439ab41-8db4-41c6-bf79-bca82a1e85b7",
      "url": "https://cdn.kapwing.com/C0221-k7l8NnWGE2.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=H6QRGXAa6iNJ3eaqX%2BDHFLOsMIuWrZW2rFR46XCpzozvLJi4yaFG3mgptwTYeNJK1NZPyUKQLVOg7FSrXYk4J9ssgc7XXmPEUdjBDO7l8k6MkKsY5fXwfCsXW35SvUIeEjX%2FKaTGkOYfDVc5ro8M%2BFooaj2OUURGtCgoCZrYcZauMxIK4BrOMKqMgE3NtWmGhwGg2SJWY00eVis2LpFbbBHB%2Bm4aYIOvaDloGpigEHuMKM4rigxRLD0uZzVxbmRSvm%2Be%2BI394kH16W2zkO7WiwsAMAgHiRKFokrAivvEZY7HuDfWbhY4R0O4GF0RQDtdX5wyrhmB051gPX7njZZ%2BRQ%3D%3D",
      "name": "C0221.MP4",
      "source": "upload",
      "objectFit": "cover",
      "addedFromMediaLibrary": true,
      "asset_id": "62e370588b5d7500b9e64298",
      "cmlFileId": "62e3705b8b5d7500b9e6429f",
      "mime": "video/mp4",
      "width": 1920,
      "height": 1080,
      "duration": 5.005,
      "hasAudio": true,
      "type": "audio",
      "videoDelay": 70.966066125,
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "timelineRow": 1,
      "volume": 1,
      "optimization_id": null,
      "uploadConfirmed": 1659248364362,
      "isTrimmed": true,
      "startTime": 0,
      "endTime": 3.9377378906250016,
      "animation": {
          "intro": [],
          "constant": [],
          "outro": []
      },
      "detachedAudioId": "c0412d3d-d560-4fc0-8412-ddeccd925527",
      "audioEffect": "fade",
      "fadeSpeed": "fast",
      "fadePosition": "outro",
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/62e374508cdf8fb7bdb178f4_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277165&Signature=Xq8du31ofz%2F6bObyznWz6J1OluyVOmHy2ArXn9Uz4azWG3%2BSM2%2BhLP%2FUk1dyc2h9WjjF0YGlfBUdm30GVpadoNOZThvGTd4mB49yU3Px1qUmiTyLXtLxGFSVAquRzgqJ2gBV1Ie6Sll6J5%2B%2FfOxOx7M%2FkzU1TeVl3AoYu9HTL%2BoJ7OeMF5BGm0hJ%2B%2FSgSZNP8dF%2Fo8%2F%2Bjq7zE4pCmNYRCmXkcYdSb3eJ0kf5AGKr6%2Ff93wNbaTUkUiojIYBHUqDyqS7Zmqp8yfvcD1hKhKda%2F138MIKpq0fjUmcvjn3rWBr7SriVmr8MNlZ6d%2BloSuPqQ4MH4EWLzJcN6XD0kBMzQA%3D%3D",
          "asset_id": "62e374a08cdf8fb7bdb178f5",
          "width": 852,
          "height": 480,
          "duration": 5.005,
          "endTime": 5.005,
          "startTime": 0,
          "mediaLibraryID": "f384ff56-ab34-4a0d-ae20-2a6ae5044c80"
      },
      "track_preview": {
          "url": "https://cdn.kapwing.com/conversions/62e374508cdf8fb7bdb178f4_track_preview.mp4",
          "asset_id": "62e374a18cdf8fb7bdb178f7",
          "mediaLibraryID": "f384ff56-ab34-4a0d-ae20-2a6ae5044c80"
      },
      "local_url": ""
  },
  {
      "gcsShortId": "xjz1SzIob",
      "id": "5ad40eb1-fa70-4f9c-80e2-1c8a7b67a302",
      "url": "https://cdn.kapwing.com/C0208-medwpC-Gy7.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=LLBAyNUymY%2Fgs98qPvw4do%2FKueLAFKLkkLfPGxOAIOzD0ToU%2FVZvhRRHy40Ns4bRptZy7py0NNINxgFKrolUplu%2F3GSXx8hVO6TkTRUYRetVJv0REQiosOp0VTw7BGQymgRFFcR93wty%2FTLehnu33N3cWrpFs8MDE1sK5Px%2FaTS6SCd9Vb3OUg2fdEOMi7ltG7W159dmkTQl%2FCfdfpuBi08KKtcN2VkNVz6m04I7sYH95KRaGROzp%2FHzqBF23XknEZTO4zb%2B%2BbdNnjNv3YG%2FCYSGOBzpaC9GoURPwTlOaPJNr6eT6%2F6mIWT1%2Bbc7AqxNs91GWoi%2B2UNt%2FNJpysVTHg%3D%3D",
      "name": "C0208.MP4",
      "source": "upload",
      "objectFit": "cover",
      "addedFromMediaLibrary": true,
      "asset_id": "62e370f545e78800a03f3980",
      "cmlFileId": "62e370f745e78800a03f3983",
      "mime": "video/mp4",
      "width": 1920,
      "height": 1080,
      "duration": 16.52,
      "hasAudio": true,
      "type": "video",
      "videoDelay": 74.903804015625,
      "position": {
          "x": "0%",
          "y": "0%",
          "rotation": 0,
          "width": "100%",
          "height": "100%"
      },
      "metadataGathered": true,
      "timelineRow": 0,
      "uploadConfirmed": 1659248364421,
      "optimization_id": null,
      "isTrimmed": true,
      "startTime": 0,
      "endTime": 16.09309515625,
      "preview": {
          "url": "https://cdn.kapwing.com/conversions/62e374c5c7f0418f3ab0d67b_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277165&Signature=VzjOElWqZVvRKY0%2FqjlVlIy9OdrFaAGfNQRq4Nkf8%2BGhGMpiejYBouut800%2F1THWEEnfUcGL4Mw5p0CH2C9dRm%2F%2F2ZB5CIdnVVvGsD1o6xn2cZaFdo9lwm2ymbUJYbZG9zoMdRUf1x9gUi1L%2Bs5iDZcXf%2FixdP8czpjz6ciP%2BDkiRWtOMedpWlYOk%2BNrZoLfrMgKENcCxYfWv236ygbjX%2BNw%2F4PBqo%2F5Vr8NSQr2VhxZKFRFDoccmPJXunMC%2FEnPFV%2Fdfu81MGPJuNdFH5okWdD4pgPW4U11RZUgmpfNFlA%2F2XGAHaidRzvZDm2%2B5H%2F5jYnbnHOa5bM%2Fohsc%2BX0a7w%3D%3D",
          "asset_id": "62e37553c7f0418f3ab0d67f",
          "width": 852,
          "height": 480,
          "duration": 16.52,
          "endTime": 16.52,
          "startTime": 0,
          "mediaLibraryID": "76bfa280-7ebe-4be0-8913-dca09d409088"
      },
      "track_preview": {
          "url": "https://cdn.kapwing.com/conversions/62e374c5c7f0418f3ab0d67b_track_preview.mp4",
          "asset_id": "62e37553c7f0418f3ab0d681",
          "mediaLibraryID": "76bfa280-7ebe-4be0-8913-dca09d409088"
      },
      "local_url": ""
  }
]

export const Videos: React.FC = () => {
    const { fps, durationInFrames } = useVideoConfig();
    const frame = useCurrentFrame();
    return (
        <>
            {layers.map((layer, i) => {
                const sequenceStartFrame = parseInt(`${layer.videoDelay * fps}`);
                const startFrame = parseInt(`${layer.startTime * fps}`);
                const endFrame = parseInt(`${layer.endTime * fps}`);
                const frameDuration = parseInt(`${endFrame - startFrame}`);
                return (
                    <Sequence key={i} name='text' from={sequenceStartFrame} durationInFrames={frameDuration}>
                        <Video src={layer.url} startFrom={startFrame} endAt={endFrame} />
                    </Sequence>
                )
            })}
        </>
    );
};

type Props = {
}


const SkateVideo: React.FC<Props> = () => {
  return (
    <div style={{
      display:'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Videos />
    </div>
  );
};

export default SkateVideo;