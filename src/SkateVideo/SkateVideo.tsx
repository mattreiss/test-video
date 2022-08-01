import { Sequence, staticFile, useCurrentFrame, useVideoConfig, Video } from "remotion";
import Song from "./Song";
 
const urls = [
  "https://cdn.kapwing.com/C0083-D9ExrZGrD.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=XXKcM1ITX%2FGkk1voe79BN8ThyeUc4PKgiTShNIT1WyVECer5wKtRMsdtOopEWTyM0fNqLt7aKHdx8ZdTCOXetCQ%2BrLsgDCs5q%2FB6O%2FmsO%2FDfkxDAjdgWY4UrHDmnJlhoWUROEhSgDd8hCjVkrzDYmFyG8BtlxnJ4pNYvwf7zDyhib2vyJ1ykUpXXUPyjpRMqoCAUskievXmv2ON61x2F%2FjILCtBzDwugL1CZe2CHPG1u2sfWDlBPSGO%2FJHRj39iu8cWW7SZGGZEq%2BqElNo%2BRJ%2BjEAVmgzouY0Mvq9njzeP7aLZUOwd7x5hkiI9XEa4YqTmELQmaTj%2Bbr%2BykL2OhSoA%3D%3D",
  "https://cdn.kapwing.com/C0020-dMATQ48ij.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=F9kQkV9%2Fp6w1OYrxObASZozg1DWxJMINB6Ph5CvXfGs%2FZdILjCJrhI9DF7Ei64ZYNB1SbIKc9c0mOBydl8PmzT5ztql7TNM7xtdHW8yxi9NSbpRPPgqQcVq3K%2FO%2Bwjukn1VRD1a8kGxMvF0X4aCjO1xWTYJRokdWNzGCDbCOKpzkR0yi7RV4M9l2EsBrpy0C3Rmdh9L0YpLJpXwY9b2fQGrakSmR%2BXakaikvjeye4XPL0uKpVBe90DZcdAKNSPyolwPdMuXfa9MikCgiRhEOhcG9tn8dWwvf8onwa9aKroae3BVUwoglvVFbbhchMV5YlPmLCaRhdDczBGUN%2BDXgfA%3D%3D",
  "https://cdn.kapwing.com/C0224-i6IakrJ-Y.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659277164&Signature=hhxzjWyd6oMx065HHl%2Fgnv1cpPCnZpm3vFz7DPt6z30NYQrtpOmHKKCxVKlz4YpnXPRjMPbxAXuv5lbFp6S1QVQ%2F0EZGhOq88bFtbLZjdHlp41vKXE%2FYLJiJzFQAlaTcOyJyyVOq4d2KUgw7zNBmvuEcQY%2FpBhI8VzNRYy0dMKM%2FVToZ%2BtqST9W8fAKXIBdk2cxjHonLnek2nav%2BuhnQ9%2F4ZF4obmYhWjmPOM%2BpUorq2FHBS%2BfM96Mr%2FXVfdU67yKSAW9W08ll8D6OCpfSEpvL78yVLoBEeuZFBcp%2FlAN65rFWDncM3fayRCa9TTma3yRDLJjI8EEOOcxByOvOEeGA%3D%3D"
]

const layers = [
    {
        "gcsShortId": "52mtrioWp",
        "id": "afc4280c-9e90-4074-9a70-15b5d3127ff3",
        "url": "https://cdn.kapwing.com/C0083-D9ExrZGrD.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=ajGr4%2FfmwvI%2FMq%2FEEN4Cs0GLHkgOhr7%2B3NrT6MC3UdpVXNogW4iu%2FBQZxbNj89vjqCuKUm7VOKrSmvTpbkFL0cfzCOci%2FV3w07PPfBK2kCRTHSOABKFkjenWZu9pOdiK%2BhSgPHQdvL7IwQ63bEOL9D026v9A8l3Me%2BCukW04Rls6b5zGWuiocFxczvBMCKMRuz0blZo4%2FaVaAkJVOFqajnw9VhkEfcwb7jXsTk0%2BCd46xAJU6omB1q2sQTiG3Yd%2F2ohbz7NM5439qWvDN0ZBeAXRY8cYchYeX5AMJqZtuYk2kR4r1d8NNAADCHPvxTQbAWOsDXnbRE1P1Pbz8FsoBQ%3D%3D",
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
        "uploadConfirmed": 1659338060064,
        "videoDelay": 12.851073,
        "preview": {
            "url": "https://cdn.kapwing.com/conversions/627f1f694a32c1ba0dddad6c_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=hfMs%2F7k4X910CpIKk%2F%2FMgxCG%2Fpou3iWgcYlvYv%2BwdcUXWQKBaonF2PpP1ebxkssanmpPTUCYw5Ns1AXUCZARgBvao45d9izLeUceMY3UCXD1CVOjKFamrrZMMxnysu2aSbny8DVn8wVeJBT4GD4tuEIMrIPPE7yEDhUFPIzPqF9L%2FGXu7KaFXXn8rGbuVXl0uEGXzt%2Be9bLOfoWCtV4pHDUwPgDSvEmz7c7X85Ky5Dq49A%2Fur6gNnLoSwM4V4XqXOoGnCTizHTuORNiQpdChF14mLY%2B90YN7wT%2BqXVsKKRShrqfZT2qon6N1JGG6WUxq00eLSgGAmuT%2FHVS3h8QtUg%3D%3D",
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
        "url": "https://cdn.kapwing.com/C0020-dMATQ48ij.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=L6mA37BE%2BsvrbKaGRtl5XYk1XwCfTdDe8WbcFW7tiCxqDSSWzWTSxT8agcZqwHKjYDiCuRXuijrvksRbXa%2BKnuq5ait5Hbba8f6Xk1st5BoNrSZtrx9%2FtuDt74CA23pXhlRkJeEdrUcVZxCtRYmF%2F2bmsVUwQg3jTFBq73PoeruyWY%2FwKngY%2BSP9nb%2BAzbRSgE9Xt9dtpzvNvynEP65O0yxw1JVcfZSiHFNdSEE5q7IOCeB41jKlgo4QrfbV4owcSidPVFOiNjVQL9N9cZRY58Eq2C7u%2BelkLVr%2FZJpRlMjrg1jXux4DyCpxuKPIWQ5azTQ7YKLVftzXOqGGW0aypA%3D%3D",
        "asset_id": "627f1fba84e6ee009a463f3f",
        "ffprobeData": {
            "r_frame_rate": "120000/1001",
            "avg_frame_rate": "120000/1001",
            "rotate": "0",
            "codec_name": "h264",
            "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
            "duration": "15.520000"
        },
        "uploadConfirmed": 1659338060085,
        "cmlFileId": "627f1fbe84e6ee009a463f40",
        "optimization_id": null,
        "preview": {
            "url": "https://cdn.kapwing.com/conversions/627f1fc04a0cd6ea4d68f1a5_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=DgAlnW%2BAgt7aWtTJdwQROGtAV3zc7k%2FxxdDDv%2FO%2BUAsdg8dBdHakG5zJfEXoGWtMZQ0zLLfCtvK517kl4Bm8gkH2adDTBOIS5DRhR3VZHghGHTucI%2F0zvfCXmLbadbU9dFhQnZbQrBHlrmNpQJO5UAxTAiH623QEQwq07r5NBJT54MgKJjdMEXbaBOJUADZPNhHWawDLwiyE71ulIPdUSvghYkIG%2Bj%2Fdebo5vhJkosyg4hLQ08iWQVKfLFERLJF0FgPXdj7hfdb%2BvfUs0VFLjAs3dAI9lBkbZya1n2FF7Z6%2F%2BxDzINh7cNR2x7fCkx3GFg9vWdv9Ro9oMHQ8irLxkw%3D%3D",
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
        "url": "https://cdn.kapwing.com/C0224-i6IakrJ-Y.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=UwmRCrb5wij0cO2K29BhfAeB%2BWBNfy7dp26EA6vQYHnpF3I%2BKEYhZzaRDJs%2FEeZwjcbhdGhj8QfU69YcvtouCn1v4R0fmqOzMH%2FxYpcq1dT9vuBimNi8rr5xTk0smPdf%2FUnkSJzj%2B5lSlqrK7oS4KQIcsHXcBRc0zGfjtcIdae%2BCmnorK51XadqscjgQqOCiP4EJYypMnPZLoEVtdpa4DzJGkpOY1c4F%2BkTRXE19x8ZZHG11nh%2FeuMZD9961Rcu39tkzJvISFXlEfbw8AO96GmHb7x2DJkW6fGC1EMrtZjuB%2BDj%2FBsLpOzD6%2BPaKuWYU%2FBz18rLNAaKg%2FE2OUHE1sw%3D%3D",
        "asset_id": "62a8e7314a1c03004cd7c08a",
        "ffprobeData": {
            "r_frame_rate": "120000/1001",
            "avg_frame_rate": "120000/1001",
            "rotate": "0",
            "codec_name": "h264",
            "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
            "duration": "36.540000"
        },
        "uploadConfirmed": 1659338060339,
        "cmlFileId": "62a8e73b4a1c03004cd7c08b",
        "optimization_id": null,
        "preview": {
            "url": "https://cdn.kapwing.com/conversions/62a8e73fb28d0110995315bb_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366861&Signature=XVrhXIaMolYootq7KsNJyanuJXs1S6CrP2IGNC4h9gc2F%2BMpabgTO7jctmauGuOeusORK%2FIv8M5qkndYXtHpmch86O5OlIypvYi2%2B%2B%2FdkBQns0tLplnAlLyqFiYlpvwtyfLslcKVDc3YBov50FYma2wZDzM1K9yBY5RyIuzsVBAx6sPYpsrjJy%2BGZOqiibK4khqOxP6WEmp4btVolpeaikzVrtNOUFMu%2Fqv3gPhjnLE4LlotPFWA2%2FDzTPlrmFGbfmBjFV7eT%2FfK5h%2F8pqseuEtNRNucHG38SQVeu2RD9wSe3iOVMj%2B7bKU41LXIbEMLa3C1ShGsI8RSh8BsiC7ChA%3D%3D",
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
        "url": "https://cdn.kapwing.com/C0414-7-BPeDT5Mm.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=DWYWTrbtdOb1TFeGzYLFtHyCpHBAO8yYbHAYAE7ulci2pswG9twhf6i4HR0qmEmsRKmBARW4jfPQShQ4ClXxiNLGs9TLiPjmP%2Bs5NYw89ce6sDW0%2FG7ZTgIQ72FDXZRL6kA8RSvOuId3gbNoOZ%2BCdItaDhRr57P88IH2cZjmQS5EDTPIBc2egpdKLq%2BCZar8%2FgLF0VeMycRJx1i5OejOKGyHYeFxMMdvNAbXmiAAjdcOV0f77qx0q%2FU6ht%2Fp0nxaMesewbQTRd2RTNdmJg%2Fvo4%2FqjzFLCzddJby%2F4JbWC%2FBDm6GbSkjGfdj5tX7nsimEtYXOW34n%2FriurAmiiU1Ouw%3D%3D",
        "asset_id": "62ce52e6e7a888007879bea1",
        "ffprobeData": {
            "r_frame_rate": "120000/1001",
            "avg_frame_rate": "120000/1001",
            "rotate": "0",
            "codec_name": "h264",
            "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
            "duration": "6.510000"
        },
        "uploadConfirmed": 1659338060324,
        "cmlFileId": "62ce52e9e7a888007879bea4",
        "optimization_id": null,
        "preview": {
            "url": "https://cdn.kapwing.com/conversions/62ce52ec85ec40661fe05eb6_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=JLSLeoutpMWcnqC5clIG0nQMfypA1wBSVY%2FBUMqa4oLYSvmuXhU8VCzkKzUtUJaBEC2qPS5TQh80eZTz7Qm098uTLMcjBH5YiDJnBgWLhdSySI3W4y0h4bYu4QFejvceIspnRc%2BTjsEX6%2FI%2FMRpAksZt5qcOzyghazEJlOBDwjLF4fP7PhcbBb5oQ0Fju1jQ%2BzyUtPGJJKSkWTtjARAyXB%2FCX3zPBMHAQhEELx2TLeWxxSLlGZNWLNzfLNAbtp%2BQZfP6XqhwUSsHdi1BJIeEvdoRpN7vc5kuVfkCfx2%2FBIUjEVIF%2FT54SKjCXjv7lcSgA5taZcrXzUjpvJpc6tebYQ%3D%3D",
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
        "url": "https://cdn.kapwing.com/C0233-RHgAS2z4t.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=jGwATo8Yx6Dl6aoZwHJlUH1wxzIvuSI%2B8hazxf%2BqFBcj1AdM4FPphmbOqcr%2BW%2BHrCAZBDd0HrKdhLkYxuM0x3CKe%2F0fIk3z9sTHPLOIPZJlY47fjnj%2FX3isL2ce1M%2F1U45N2OxXJe1k5GFnibnPVf%2F8e51nIsNmB%2BfUP4Jbw%2FoyPDxF8l09OSYY0yIhcSjWF7qz7HJHifysZIOmCN%2B20CLjCAQro563mWfkngPSiHlhqQxTooEj35KxDjyBVVd3Vy2oQjwVvcObxuGUVA3y%2FtgJNeElTWiKKYe016v7824LUgrY1jyDxaMDsEgONHok4RA4hvv8wYKu9lb8COb3ksg%3D%3D",
        "asset_id": "62e36ee3b0fab100afdda6d5",
        "ffprobeData": {
            "r_frame_rate": "120000/1001",
            "avg_frame_rate": "120000/1001",
            "rotate": "0",
            "codec_name": "h264",
            "codec_long_name": "H.264 / AVC / MPEG-4 AVC / MPEG-4 part 10",
            "duration": "18.520000"
        },
        "uploadConfirmed": 1659338060293,
        "cmlFileId": "62e36ee4b0fab100afdda6da",
        "optimization_id": null,
        "preview": {
            "url": "https://cdn.kapwing.com/conversions/62e36ee7a8a5e468894b2ea6_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=QGTascVhyvDj%2FEmU4BKdRUW7NFrPdyqutEVx3klsAhhCuETqoMV7nXHF79db%2F5GeCVqTCtwuPYuSUrHDW%2Fg1LceJhNTXV9%2BZgNMBlpA9RenAoR1dXxqrceRDCXWKk%2FETMxhCnI1%2B4qV%2Bi4Iupnq2Awy7scBvhS6lxbfidKQQXv6tka5OhMrbgSfAgHAEUmAemWRNkk22ncUwxUNxzYVITqpyqrFE%2FFXyxkKL8Qxd1PUXqnwkHKZpXBTl5kIufx%2FwnZzOE2D8vziweQsdfdatMkT%2F%2BpF50iy%2B6tq5LfkVbTGHbQuNTpJyqPLOMlmBQm7sGA5SYnc8uq74Q1nhqpGU4w%3D%3D",
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
        "url": "https://cdn.kapwing.com/C0221-k7l8NnWGE2.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=cyJoGEHTJQuMUpHESKI2G3whXChcecbXNY4NhGVUJTIPKnq4Lcolu0WTGjceLY04sVW4EMLMeae8ynMd%2FcS%2BvKqvnEd2SjtW%2BUyOMn4%2BORoIs4Ta7MgkGl6OFT%2BtGgr7oNuZGPUNFCV5oQ4B8FxzqIKDgMZDWaI0d4XbKj9OkUqoU4Gx0m%2B0No8DhdoqaO0NXKHQvDgJO%2FbHxe15T%2BCKBC%2BI%2FDSx4oSrLIXKm66RjcYgclJcjouR4B5J5AujqPc6HI1DOHB%2BsMgd95XJbGgRbxIGxyVV7csp3teEOSzA8aC8cPA%2FxG9GIuc3E3%2Brxhq9dWre4eoUwUJ5xFcnvYJzrQ%3D%3D",
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
        "uploadConfirmed": 1659338060098,
        "isTrimmed": true,
        "startTime": 0,
        "endTime": 3.9377378906250016,
        "detachedAudioId": "c0412d3d-d560-4fc0-8412-ddeccd925527",
        "preview": {
            "url": "https://cdn.kapwing.com/conversions/62e374508cdf8fb7bdb178f4_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=AyTctLZfuKntBjiyJJ49Db1b1lrgTZjz2fb07KW5x5xaGJiKYngrhlHl2F0KkMM3%2BommM6Z%2BrgygXcuq0zQtT79EKoEOe6zItcEreZfU4fUd78pMNGV1iR%2BgIjAAcAK8M2PD59K%2BcoN88r5FJ%2BzQ5%2FIoO9qFnQVSKAZtzS%2BedQoD%2FX1cJFTSOPhJvOy%2BV6QNEQkJ5G%2FeCFzXjKpJtprp1g3KzhWMRMcTLalEuW4ERx2KbQzIhe235WTb%2B0taDPRya0esrblpi7E58Q6FczuopHh52cPGfUiWLwy0zxrwpdXjGvDqqapJA4CNX6vTf87zLbifzJe4MN2vWn2zVcbAUw%3D%3D",
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
            "mediaLibraryID": "f384ff56-ab34-4a0d-ae20-2a6ae5044c80",
            "hasAudio": true
        },
        "local_url": "blob:https://www.kapwing.com/96f6b15c-da2c-4345-8519-9d5dbd21b50a"
    },
    {
        "gcsShortId": "7kMYawyVs",
        "id": "e439ab41-8db4-41c6-bf79-bca82a1e85b7",
        "url": "https://cdn.kapwing.com/C0221-k7l8NnWGE2.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=cyJoGEHTJQuMUpHESKI2G3whXChcecbXNY4NhGVUJTIPKnq4Lcolu0WTGjceLY04sVW4EMLMeae8ynMd%2FcS%2BvKqvnEd2SjtW%2BUyOMn4%2BORoIs4Ta7MgkGl6OFT%2BtGgr7oNuZGPUNFCV5oQ4B8FxzqIKDgMZDWaI0d4XbKj9OkUqoU4Gx0m%2B0No8DhdoqaO0NXKHQvDgJO%2FbHxe15T%2BCKBC%2BI%2FDSx4oSrLIXKm66RjcYgclJcjouR4B5J5AujqPc6HI1DOHB%2BsMgd95XJbGgRbxIGxyVV7csp3teEOSzA8aC8cPA%2FxG9GIuc3E3%2Brxhq9dWre4eoUwUJ5xFcnvYJzrQ%3D%3D",
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
        "uploadConfirmed": 1659338060106,
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
            "url": "https://cdn.kapwing.com/conversions/62e374508cdf8fb7bdb178f4_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=AyTctLZfuKntBjiyJJ49Db1b1lrgTZjz2fb07KW5x5xaGJiKYngrhlHl2F0KkMM3%2BommM6Z%2BrgygXcuq0zQtT79EKoEOe6zItcEreZfU4fUd78pMNGV1iR%2BgIjAAcAK8M2PD59K%2BcoN88r5FJ%2BzQ5%2FIoO9qFnQVSKAZtzS%2BedQoD%2FX1cJFTSOPhJvOy%2BV6QNEQkJ5G%2FeCFzXjKpJtprp1g3KzhWMRMcTLalEuW4ERx2KbQzIhe235WTb%2B0taDPRya0esrblpi7E58Q6FczuopHh52cPGfUiWLwy0zxrwpdXjGvDqqapJA4CNX6vTf87zLbifzJe4MN2vWn2zVcbAUw%3D%3D",
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
            "mediaLibraryID": "f384ff56-ab34-4a0d-ae20-2a6ae5044c80",
            "hasAudio": true
        },
        "longLoadFired": true,
        "local_url": "blob:https://www.kapwing.com/96f6b15c-da2c-4345-8519-9d5dbd21b50a"
    },
    {
        "gcsShortId": "xjz1SzIob",
        "id": "5ad40eb1-fa70-4f9c-80e2-1c8a7b67a302",
        "url": "https://cdn.kapwing.com/C0208-medwpC-Gy7.MP4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=VokOMT3gX8afWQqO2Vk6obQKFEZiA%2FEoC6u0nPb3ogI9E4eBY%2Bdyiz0KoJRY0MHf%2FLINwceHirqU1zxhR5G36ZNtiCYHnvmRjlkkfDHANdMkCX3WmtFRmJxEKO5P8%2FxH5hj%2Bi5z%2Fc9uQjoAVRolj51rY4X%2BgLXwylm2x94KaVnS54BRTl0zIRAmMMyYWzLBryQ3HztWofAb7cQGXERVwgYn7xM88HRolJ8OYCYKm5eOPUhbjDf5wSRdwJm2Lc14RmpVChFk%2FHzOyV%2BJTmcglgmdzsMGD2K69qPkXx%2FpfZNlr3rhEkpHwKmqoz64wMxnjtdJ6%2FgYT3sE5GSnDKAbYxA%3D%3D",
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
        "uploadConfirmed": 1659338060305,
        "optimization_id": null,
        "isTrimmed": true,
        "startTime": 0,
        "endTime": 16.09309515625,
        "preview": {
            "url": "https://cdn.kapwing.com/conversions/62e374c5c7f0418f3ab0d67b_preview.mp4?GoogleAccessId=prod-sa-videoprocessing%40kapwing-prod.iam.gserviceaccount.com&Expires=1659366860&Signature=dDtuMnHQFoXrvRKdea0UHMO2lP8X08hO9Stp2pOuTu3JuW1UNjvlvRWDqEJLToGPuh0xKIxYfFDIN%2FoMRKMBa9n0TMLj475JI6dUmS%2FibPmNAoaZ%2F3DlMiE7B%2BRQiCfyYt%2Fw1cvxswDpM9mqqdT3V5tbKFZQ6GRrycYvDVCy8LX389%2BwoGqydfu2Hpirha2PreXDuLnDeFlSad1QCcrIaGQ47Yt5SoGc%2F7r4jew229ioFvzDo%2BYbyhilY2ur7tB2cP9tR23SzGLiui1gCSlwC2DucMunAvtBq2s2LtMiRJhDJ4fPViawH4eT%2BmIy4CjbOFxIGlr6R4cndti3koP9PQ%3D%3D",
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
            "mediaLibraryID": "76bfa280-7ebe-4be0-8913-dca09d409088",
            "hasAudio": true
        },
        "local_url": ""
    }
]

export const Videos: React.FC = () => {
    const { fps, durationInFrames } = useVideoConfig();
    const frame = useCurrentFrame();
    const toFrame = (time: number) => {
        return parseInt(`${fps * Math.round(time * 10) / 10}`)
    }
    return (
        <>
            {layers.map((layer, i) => {
                const sequenceStartFrame = toFrame(layer.videoDelay);
                const startFrame = toFrame(layer.startTime);
                const endFrame = toFrame(layer.endTime);
                const frameDuration = endFrame - startFrame;
                return (
                    <Sequence key={i} name={layer.name} from={sequenceStartFrame} durationInFrames={frameDuration}>
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
        {/* <Video src={staticFile("/video/andy.MP4")} /> */}
        <Videos />
        <Song />
    </div>
  );
};

export default SkateVideo;