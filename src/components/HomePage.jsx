import VideoCard from './VideoCard'
import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import { useCategory } from '../context/CategoryContext'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { fetchHomePageFromAPI } from '../utils/fetchHomePageFromAPI'
export default function HomePage() {
	const testData = {
		kind: 'youtube#searchListResponse',
		nextPageToken: 'CDIQAA',
		regionCode: 'DE',
		pageInfo: {
			totalResults: 1000000,
			resultsPerPage: 50
		},
		items: [
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#channel',
					channelId: 'UCrkfdiZ4pF3f5waQaJtjXew'
				},
				snippet: {
					publishedAt: '2015-05-08T04:25:58Z',
					channelId: 'UCrkfdiZ4pF3f5waQaJtjXew',
					title: 'GamingWithKev',
					description: 'I play video games and talk a bunch of crap.',
					thumbnails: {
						default: {
							url: 'https://yt3.ggpht.com/ytc/AOPolaQexKo-ghYqqhGDCpLfQ237wy63rcwsDX8QV27-Bw=s88-c-k-c0xffffffff-no-rj-mo'
						},
						medium: {
							url: 'https://yt3.ggpht.com/ytc/AOPolaQexKo-ghYqqhGDCpLfQ237wy63rcwsDX8QV27-Bw=s240-c-k-c0xffffffff-no-rj-mo'
						},
						high: {
							url: 'https://yt3.ggpht.com/ytc/AOPolaQexKo-ghYqqhGDCpLfQ237wy63rcwsDX8QV27-Bw=s800-c-k-c0xffffffff-no-rj-mo'
						}
					},
					channelTitle: 'GamingWithKev',
					liveBroadcastContent: 'none',
					publishTime: '2015-05-08T04:25:58Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'G3X8OcSb3rA'
				},
				snippet: {
					publishedAt: '2023-04-29T15:34:07Z',
					channelId: 'UCNvzD7Z-g64bPXxGzaQaa4g',
					title: '10 UNMISSABLE Video Games To TRY A NEW GENRE',
					description:
						'We all have our favorite gaming genres...but variety is the spice of life and sometimes you want to try something new. Subscribe ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/G3X8OcSb3rA/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/G3X8OcSb3rA/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/G3X8OcSb3rA/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'gameranx',
					liveBroadcastContent: 'none',
					publishTime: '2023-04-29T15:34:07Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'AmxVAR2S7sY'
				},
				snippet: {
					publishedAt: '2023-06-09T00:45:00Z',
					channelId: 'UC2aG3ddqJs7GU-Fq0ETgSLg',
					title: 'POWER OF GAMING WATCH 😁',
					description:
						'POWER OF GAMING WATCH ✓ Your Queries #ytshorts #youtubeshorts #shorts #watch #freefire #Gaming #funnyvideo ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/AmxVAR2S7sY/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/AmxVAR2S7sY/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/AmxVAR2S7sY/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'OnZan',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-09T00:45:00Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'lJrHLnhJl-M'
				},
				snippet: {
					publishedAt: '2023-07-07T18:30:40Z',
					channelId: 'UCIPPMRA040LQr5QPyJEbmXA',
					title: 'Press This Button = Win $100,000!',
					description:
						"Get yourself a better browser here: https://operagx.gg/MrBeastGaming SUBSCRIBE OR YOU'LL HAVE BAD LUCK New Merch ...",
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/lJrHLnhJl-M/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/lJrHLnhJl-M/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/lJrHLnhJl-M/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'MrBeast Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-07T18:30:40Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'lU7BJPI8RYI'
				},
				snippet: {
					publishedAt: '2023-06-17T08:00:31Z',
					channelId: 'UCp6_KuNhT0kcFk-jXw9Tivg',
					title: 'Music Mix 2023 🎧 EDM Remixes of Popular Songs 🎧 Gaming Music - Bass Boosted',
					description: 'Music Mix 2023 EDM Remixes of Popular Songs Gaming Music - Bass Boosted STREAM NOW: ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/lU7BJPI8RYI/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/lU7BJPI8RYI/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/lU7BJPI8RYI/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Magic Music',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-17T08:00:31Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'GUJv1JVAtF8'
				},
				snippet: {
					publishedAt: '2023-05-28T22:00:06Z',
					channelId: 'UCGcg2z-x0JiNy8dKEmMnuew',
					title: 'Gaming is Dying... This Is why | Video Essay',
					description:
						'Gaming is dying, Not in sales or in popularity but in value. There are 4 things that are eating gaming from the inside out. Games ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/GUJv1JVAtF8/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/GUJv1JVAtF8/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/GUJv1JVAtF8/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Exiled',
					liveBroadcastContent: 'none',
					publishTime: '2023-05-28T22:00:06Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'IBMh0vAZZ1Y'
				},
				snippet: {
					publishedAt: '2023-03-08T18:56:09Z',
					channelId: 'UCrjEDRncKYTfJVNaKxliHfw',
					title: 'I Built a Secret Gaming Room to Hide from my Girlfriend!',
					description: 'I built the craziest hidden gaming setup to hide from my girlfriend!',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/IBMh0vAZZ1Y/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/IBMh0vAZZ1Y/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/IBMh0vAZZ1Y/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Zack & Nat',
					liveBroadcastContent: 'none',
					publishTime: '2023-03-08T18:56:09Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '_5x3XBxkq9o'
				},
				snippet: {
					publishedAt: '2023-05-02T07:00:11Z',
					channelId: 'UCdifEs0tAZbaP1E3IkGMzSA',
					title: '🔥Best Gaming Music 2023 Mix ♫ Top 50 EDM Remixes x NCS Gaming Music ♫ Best EDM, Trap, DnB, Dubstep',
					description:
						'Best Gaming Music 2023 Mix ♫ Top 50 EDM Remixes x NCS Gaming Music ♫ Best EDM, Trap, DnB, Dubstep Listen on ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/_5x3XBxkq9o/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/_5x3XBxkq9o/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/_5x3XBxkq9o/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'EDM for Life ',
					liveBroadcastContent: 'none',
					publishTime: '2023-05-02T07:00:11Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '15czzoOjizs'
				},
				snippet: {
					publishedAt: '2023-02-16T03:37:07Z',
					channelId: 'UCMWGgbsylPpmcGtTOeFEJYA',
					title: 'Satisfying Mobile Games ALL LEVELS Playing 1001 Tiktok Gaming Trailer Fat To Fit BA66M181',
					description:
						'tiktokapp #mobilegame #fattofit ============================ Satisfying Mobile Games ALL LEVELS Playing 1001 ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/15czzoOjizs/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/15czzoOjizs/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/15czzoOjizs/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'DaKoi',
					liveBroadcastContent: 'none',
					publishTime: '2023-02-16T03:37:07Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'c9O4WYUctTs'
				},
				snippet: {
					publishedAt: '2023-06-25T15:48:03Z',
					channelId: 'UCNvzD7Z-g64bPXxGzaQaa4g',
					title: 'Top 10 NEW Games of July 2023',
					description:
						'July 2023 is filled with new game releases and release dates for PC, PS5, PS4, Xbox Series X/S and Nintendo Switch. Subscribe ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/c9O4WYUctTs/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/c9O4WYUctTs/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/c9O4WYUctTs/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'gameranx',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-25T15:48:03Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'NsNABClOSes'
				},
				snippet: {
					publishedAt: '2023-02-14T09:00:26Z',
					channelId: 'UCdifEs0tAZbaP1E3IkGMzSA',
					title: 'New Gaming Music 2023 Mix 🎧 Best Of EDM, Gaming Music, Trap, House, Dubstep 🎶 EDM Music Mix',
					description:
						'Listen on Spotify: https://magicmusic.link/BestCarPlaylist https://deepuniverse.lnk.to/HouseMusic ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/NsNABClOSes/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/NsNABClOSes/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/NsNABClOSes/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'EDM for Life ',
					liveBroadcastContent: 'none',
					publishTime: '2023-02-14T09:00:26Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'UzW4TI5v3xw'
				},
				snippet: {
					publishedAt: '2023-01-10T20:58:46Z',
					channelId: 'UCHUil_gQBkCq5MhAhbynYzw',
					title: 'The REAL Reason Gaming Isn’t Fun Anymore',
					description:
						"Most people aren't talking about the REAL reason that gaming is no longer as fun. I don't think many people are considering just ...",
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/UzW4TI5v3xw/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/UzW4TI5v3xw/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/UzW4TI5v3xw/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Jdyo',
					liveBroadcastContent: 'none',
					publishTime: '2023-01-10T20:58:46Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'H_ZaLneZuRM'
				},
				snippet: {
					publishedAt: '2023-07-12T12:28:01Z',
					channelId: 'UCtrJkOsiFLIUg6Dku7UVn_A',
					title: 'Gaming Music 2023 ♫ Best Of EDM ♫ NCS ,Trap, Dubstep, House',
					description:
						'Gaming Music 2023 Mix ♫♫ Best Of EDM ♫ Trap, Dubstep, House Gaming Music 2023 https://youtu.be/W18j3d5LkOw ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/H_ZaLneZuRM/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/H_ZaLneZuRM/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/H_ZaLneZuRM/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Cloudx Music',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-12T12:28:01Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '11t0xgClpjc'
				},
				snippet: {
					publishedAt: '2023-06-30T20:00:00Z',
					channelId: 'UCwIWAbIeu0xI0ReKWOcw3eg',
					title: 'I Built 4 Secret Gaming Bases You&#39;d Never Find!',
					description:
						'Thanks to #BangEnergy for sponsoring this video! Use my code UNSPEAKABLE10 for 10% OFF of your order at ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/11t0xgClpjc/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/11t0xgClpjc/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/11t0xgClpjc/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Unspeakable',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-30T20:00:00Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'p84BLCDOspU'
				},
				snippet: {
					publishedAt: '2023-03-25T14:00:36Z',
					channelId: 'UCkQO3QsgTpNTsOw6ujimT5Q',
					title: 'Gamers Caught Cheating - Part 5',
					description: 'Here are more gamers caught cheating! Part 4: ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/p84BLCDOspU/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/p84BLCDOspU/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/p84BLCDOspU/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'BE AMAZED',
					liveBroadcastContent: 'none',
					publishTime: '2023-03-25T14:00:36Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '1Vp6G2mkTzc'
				},
				snippet: {
					publishedAt: '2023-07-04T10:02:59Z',
					channelId: 'UCjj-y6_IrKEGAJsB-psnAJA',
					title: 'EFSANE BAŞLANGIÇ - MİNECRAFT 1.Bölüm',
					description:
						'Sosyal Medya Hesaplarımı Takip Edebilirsiniz Sasuke Instagram ➤ https://www.instagram.com/sasukeabig/?hl=tr Naruto ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/1Vp6G2mkTzc/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/1Vp6G2mkTzc/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/1Vp6G2mkTzc/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'SASUKE Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-04T10:02:59Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '3fLWYOcgOcQ'
				},
				snippet: {
					publishedAt: '2023-06-30T12:13:49Z',
					channelId: 'UCtrJkOsiFLIUg6Dku7UVn_A',
					title: 'Gaming Music 2023 ♫♫ Best Of EDM ♫ NCS ,Trap, Dubstep, House',
					description:
						'Gaming Music 2023 Mix ♫♫ Best Of EDM ♫ Trap, Dubstep, House Gaming Music 2023 https://youtu.be/W18j3d5LkOw ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/3fLWYOcgOcQ/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/3fLWYOcgOcQ/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/3fLWYOcgOcQ/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Cloudx Music',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-30T12:13:49Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'F4XnoS7HZWI'
				},
				snippet: {
					publishedAt: '2023-07-11T09:00:08Z',
					channelId: 'UCkka5j2ya5biR4oBGlaZCmQ',
					title: 'How to get FREE ROBLOX NEW REALISTIC AVATARS in Brookhaven!',
					description:
						'How to GET REALISTIC ROBLOX AVATARS in Roblox Brookhaven RP NEW UPDATE! CHANGED THIS SECRET HACK in ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/F4XnoS7HZWI/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/F4XnoS7HZWI/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/F4XnoS7HZWI/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Maya Clara Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-11T09:00:08Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'MvvEfguRha0'
				},
				snippet: {
					publishedAt: '2023-02-26T02:38:50Z',
					channelId: 'UC6xSN0oY2I9U_9xTo2RjE7g',
					title: 'I Built a Secret Gaming Room!',
					description:
						"I Built An Invisible Hidden Gaming Room Built this to hide from my friends, so i didn't have to go bald.. NEW VIDEOS EVERY ...",
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/MvvEfguRha0/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/MvvEfguRha0/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/MvvEfguRha0/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Jeremy Hutchins',
					liveBroadcastContent: 'none',
					publishTime: '2023-02-26T02:38:50Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'KbbKAxnpCQQ'
				},
				snippet: {
					publishedAt: '2023-06-16T17:24:26Z',
					channelId: 'UCVWNj8aMx8uzzoZdsVMEwKg',
					title: 'BUILDING MY DREAM GAMING SETUP IN 2023 - FULL DIY WALKTHROUGH',
					description:
						'Amazon PRIME DAY is happening NOW: https://amzn.to/44B57vg Prime Day Deals PC Components: https://amzn.to/44E6FVf ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/KbbKAxnpCQQ/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/KbbKAxnpCQQ/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/KbbKAxnpCQQ/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Chris Maher',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-16T17:24:26Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'TVGJIayCmlE'
				},
				snippet: {
					publishedAt: '2023-06-15T19:30:31Z',
					channelId: 'UCo8HnWzRvJQTsYNF1Sfhxvw',
					title: 'That Was The WORST Gaming Showcase of all Time',
					description:
						'The Xbox Gaming Showcase, Summer Games Fest, Ubisoft Forward, Future Games Show, PC Gaming Show, and The Capcom ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/TVGJIayCmlE/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/TVGJIayCmlE/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/TVGJIayCmlE/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Synthetic Man',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-15T19:30:31Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'CdNcu5xENIc'
				},
				snippet: {
					publishedAt: '2023-05-24T16:06:08Z',
					channelId: 'UCNvzD7Z-g64bPXxGzaQaa4g',
					title: '13 BEST Single Player Games You NEVER Played',
					description:
						"Today we just wanted to talk about some cool singleplayer game experiences/campaigns we like. That's it. Subscribe for more: ...",
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/CdNcu5xENIc/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/CdNcu5xENIc/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/CdNcu5xENIc/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'gameranx',
					liveBroadcastContent: 'none',
					publishTime: '2023-05-24T16:06:08Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '-UT6v68fJY0'
				},
				snippet: {
					publishedAt: '2023-01-28T17:49:16Z',
					channelId: 'UC073quTeFarhKNe8ZuC6Qig',
					title: 'Making a LIFE SIZE GAMING SIMULATOR',
					description:
						'In this video I updated my virtual tv window to anywhere to be run by a gaming computer and Nvidia GeForce Surround. The three ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/-UT6v68fJY0/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/-UT6v68fJY0/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/-UT6v68fJY0/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Drew Builds Stuff',
					liveBroadcastContent: 'none',
					publishTime: '2023-01-28T17:49:16Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'kvAoo5oUAAo'
				},
				snippet: {
					publishedAt: '2023-06-29T17:49:11Z',
					channelId: 'UCGhs9S33RAeT5DEuKTO4Oew',
					title: '13 Best NEW Games To Play In July 2023',
					description:
						'Time for another monthly preview of the best looking upcoming New Games, this time for July 2023. Thanks to Holzkern for ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/kvAoo5oUAAo/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/kvAoo5oUAAo/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/kvAoo5oUAAo/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Force Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-29T17:49:11Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '8XYpogDZdCI'
				},
				snippet: {
					publishedAt: '2023-06-10T14:15:13Z',
					channelId: 'UCemhZ2At2lgifTJLClGCz9A',
					title: 'i SNUCK into an ONLY GIRLS School!',
					description: 'i SNUCK into an ONLY GIRLS School! SUBSCRIBE ​⁠@RoyaltyGaming1 SUBSCRIBE To Royalty Family ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/8XYpogDZdCI/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/8XYpogDZdCI/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/8XYpogDZdCI/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Royalty Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-10T14:15:13Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'dmSPrF4CC8E'
				},
				snippet: {
					publishedAt: '2023-03-20T13:19:32Z',
					channelId: 'UCtrJkOsiFLIUg6Dku7UVn_A',
					title: 'Gaming Music 2023 | Best Music Mix || EDM, Trap, Dubstep, House',
					description:
						'Gaming Music 2023 | Best Music Mix || EDM, Trap, Dubstep, House Gaming Music 2023 https://youtu.be/W18j3d5LkOw ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/dmSPrF4CC8E/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/dmSPrF4CC8E/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/dmSPrF4CC8E/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Cloudx Music',
					liveBroadcastContent: 'none',
					publishTime: '2023-03-20T13:19:32Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'pw0Y8u6jtJ8'
				},
				snippet: {
					publishedAt: '2023-06-10T23:01:00Z',
					channelId: 'UCyeVfsThIHM_mEZq7YXIQSQ',
					title: 'World&#39;s *MOST* Viewed GAMING YouTube Shorts! (SKIBIDI TOILET)',
					description:
						'Skibidi Toilet - GAMING YouTube Shorts! ▻ Watch Another Video! - https://youtu.be/ojrzDWIYbIE Hit LIKE and ✓ Subscribe ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/pw0Y8u6jtJ8/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/pw0Y8u6jtJ8/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/pw0Y8u6jtJ8/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'MoreAliA',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-10T23:01:00Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'LQMUV2h3yJQ'
				},
				snippet: {
					publishedAt: '2023-07-04T10:30:07Z',
					channelId: 'UCVjCsq6PCd1RxrhkOfuGMsw',
					title: 'MINECRAFT NOOB ĂN QUÁI VẬT ĐƯỢC ĐỒ VIP NHẤT',
					description: 'MINECRAFT NOOB ĂN QUÁI VẬT ĐƯỢC ĐỒ VIP NHẤT ▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭▭ FB Cá ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/LQMUV2h3yJQ/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/LQMUV2h3yJQ/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/LQMUV2h3yJQ/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'T Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-04T10:30:07Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'NyCy3K3Ev50'
				},
				snippet: {
					publishedAt: '2023-06-27T13:00:13Z',
					channelId: 'UC6NpRkanSBgQVdPZs_y3aKg',
					title: 'MIGLIORI MONITOR GAMING DAI 150€ AI 1500€',
					description:
						"Questo video è in collaborazione con Corsair iCUE Murals https://bit.ly/3OjDkuy che ti consente di sincronizzare l'illuminazione ...",
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/NyCy3K3Ev50/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/NyCy3K3Ev50/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/NyCy3K3Ev50/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Prodigeek',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-27T13:00:13Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'lcPI7IXBtIQ'
				},
				snippet: {
					publishedAt: '2023-06-15T05:45:02Z',
					channelId: 'UCcsL06xD4HLPWMQPDwcdjyQ',
					title: 'Mengerikan! Terjebak Ke Dalam Dunia Skibidi Toilet &amp; Dikejar Gerombolan Skibidi Toilet',
					description:
						'Halo teman - teman semua selamat datang di chanel DARLUNG GAMING Bagi yang baru mampir ke chanel ini bisa kali untuk ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/lcPI7IXBtIQ/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/lcPI7IXBtIQ/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/lcPI7IXBtIQ/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'DARLUNG GAMING',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-15T05:45:02Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '8mbwxsgy4iA'
				},
				snippet: {
					publishedAt: '2023-06-23T15:45:00Z',
					channelId: 'UCN55-Bfi28ovfnI14XThuXQ',
					title: 'കൊടും കാട് Escape Amazon forest Uncharted part 16',
					description:
						'FOLLOW ON FB TO WATCH STREAMS FACEBOOK PAGE LINK : https://www.facebook.com/maalbrolife/ ѕσ¢ιαℓ иєтωσяк   ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/8mbwxsgy4iA/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/8mbwxsgy4iA/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/8mbwxsgy4iA/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Maalbro Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-23T15:45:00Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: '9Gy7bUxCRPQ'
				},
				snippet: {
					publishedAt: '2023-07-12T11:00:14Z',
					channelId: 'UCEQ7KR9enYdQsB6kcMnw0NA',
					title: 'Baldur&#39;s Gate 3: Content Plans &amp; The Road To 100%',
					description:
						'Talking about some of the planned content I have in store for BG3 both before and after release as well as some discussion about ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/9Gy7bUxCRPQ/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/9Gy7bUxCRPQ/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/9Gy7bUxCRPQ/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Mortismal Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-12T11:00:14Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'NO61e_Fk_Ls'
				},
				snippet: {
					publishedAt: '2023-07-12T15:04:21Z',
					channelId: 'UCmlqW3C9C0_gA0LufzbHfKg',
					title: 'Starfield Exploration Could Change Gaming Forever',
					description:
						"Players will be able to travel to more than 1000 planets in Starfield, and that's just the beginning. The Bethesda developers have ...",
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/NO61e_Fk_Ls/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/NO61e_Fk_Ls/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/NO61e_Fk_Ls/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Legacy Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-12T15:04:21Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'GQ1yTZw0HAU'
				},
				snippet: {
					publishedAt: '2023-06-12T19:26:06Z',
					channelId: 'UCFx3j0DLkcCU3aTKJnb8-Ug',
					title: 'كراتين ممنوعة من العرض 😨',
					description:
						'حسابي على الانستغرام ⬇⬇ https://www.instagram.com/g.cs.1/ سيرفر الديسكورد ⬇⬇ https://discord.gg/VxHmuwahWH للإعلانات ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/GQ1yTZw0HAU/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/GQ1yTZw0HAU/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/GQ1yTZw0HAU/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'جيمنج سنتار | Gaming Center',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-12T19:26:06Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'YAqr8ZLbkmk'
				},
				snippet: {
					publishedAt: '2023-02-09T20:31:00Z',
					channelId: 'UCyeVfsThIHM_mEZq7YXIQSQ',
					title: 'TikToks *ONLY* GAMERS will Understand! (LOL)',
					description:
						'TikToks *ONLY* GAMERS will Understand! (LOL) ▻ Watch Another Video! - https://youtu.be/6JhqXL-8C3I Hit LIKE and ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/YAqr8ZLbkmk/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/YAqr8ZLbkmk/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/YAqr8ZLbkmk/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'MoreAliA',
					liveBroadcastContent: 'none',
					publishTime: '2023-02-09T20:31:00Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'ogNSrFKcKJs'
				},
				snippet: {
					publishedAt: '2023-06-24T08:38:35Z',
					channelId: 'UCKPDKDddJgtFoZz_XvqP1VQ',
					title: 'PURCHASING SUPRA MK4 IN FORZA HORIZON 5 😍',
					description:
						'Hey Guys Connect with me on Instagram for updates - https://instagram.com/piyushjoshivlog ( BUSINESS EMAIL ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/ogNSrFKcKJs/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/ogNSrFKcKJs/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/ogNSrFKcKJs/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Piyush Joshi Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-24T08:38:35Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'prTIBtfVCNo'
				},
				snippet: {
					publishedAt: '2023-06-26T10:21:46Z',
					channelId: 'UCtrJkOsiFLIUg6Dku7UVn_A',
					title: 'Gaming Music 2023 ♫♫ Best Of EDM ♫ NCS ,Trap, Dubstep, House',
					description:
						'Gaming Music 2023 Mix ♫♫ Best Of EDM ♫ Trap, Dubstep, House Gaming Music 2023 https://youtu.be/W18j3d5LkOw ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/prTIBtfVCNo/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/prTIBtfVCNo/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/prTIBtfVCNo/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Cloudx Music',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-26T10:21:46Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'HC4_KbAfsgc'
				},
				snippet: {
					publishedAt: '2023-06-13T07:00:06Z',
					channelId: 'UC3MTnx9PIs8_9w24mKADZiQ',
					title: 'I KIDNAPPED PLAYERS IN HYPIXEL SKYBLOCK FOR MONEY | MINECRAFT',
					description:
						'I KIDNAPPED PLAYERS IN HYPIXEL SKYBLOCK FOR MONEY | MINECRAFT. Toh bhai logo please mujhe subscribe karna ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/HC4_KbAfsgc/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/HC4_KbAfsgc/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/HC4_KbAfsgc/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Chapati Hindustani Gamer',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-13T07:00:06Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'o2mlzNH8H8w'
				},
				snippet: {
					publishedAt: '2023-06-29T05:56:45Z',
					channelId: 'UCcsL06xD4HLPWMQPDwcdjyQ',
					title: 'Tersakiti Diawal Membuatku Bangkit Menjadi Petinju Legendary Dengan Rekor Tak Terkalahkan',
					description:
						'Halo teman - teman semua selamat datang di chanel DARLUNG GAMING Bagi yang baru mampir ke chanel ini bisa kali untuk ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/o2mlzNH8H8w/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/o2mlzNH8H8w/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/o2mlzNH8H8w/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'DARLUNG GAMING',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-29T05:56:45Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'W18j3d5LkOw'
				},
				snippet: {
					publishedAt: '2023-04-06T13:08:31Z',
					channelId: 'UCtrJkOsiFLIUg6Dku7UVn_A',
					title: 'Gaming Music 2023 | Best Music Mix || Best of NoCopyrightSounds',
					description:
						'Gaming Music 2023 | Best Music Mix || EDM, Trap, Dubstep, House Gaming Music 2023 https://youtu.be/W18j3d5LkOw ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/W18j3d5LkOw/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/W18j3d5LkOw/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/W18j3d5LkOw/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Cloudx Music',
					liveBroadcastContent: 'none',
					publishTime: '2023-04-06T13:08:31Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'HVQTXfV7gLY'
				},
				snippet: {
					publishedAt: '2023-05-20T14:45:02Z',
					channelId: 'UC70Dib4MvFfT1tU6MqeyHpQ',
					title: 'I CHEATED in Hide and Seek Using a FAKE Gaming PC',
					description:
						'I CHEATED in Hide and Seek Using a FAKE Gaming PC with Preston MERCH - http://www.firemerch.com NEW Fire ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/HVQTXfV7gLY/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/HVQTXfV7gLY/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/HVQTXfV7gLY/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Preston',
					liveBroadcastContent: 'none',
					publishTime: '2023-05-20T14:45:02Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'IHtVarfLUG8'
				},
				snippet: {
					publishedAt: '2023-07-12T10:00:11Z',
					channelId: 'UCG0SzK_t4-Ylf1yZq9Xmi_g',
					title: '🔥Gaming Music 2023 ♫ Best of EDM ♫ Best NCS Music Mix 2023',
					description:
						'Welcome to Freeme NCS☆ ------- ▻Gaming Music 2023 ♫ Best of EDM ♫ Best NCS Music Mix 2023 ▶️NoCopyrightSounds ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/IHtVarfLUG8/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/IHtVarfLUG8/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/IHtVarfLUG8/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Freeme NCS Music',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-12T10:00:11Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 't7RKFD0RORA'
				},
				snippet: {
					publishedAt: '2023-07-12T03:45:03Z',
					channelId: 'UC9PD3EIAA-vtGLZgYXG3q0A',
					title: 'ROBLOX BUT EVERY SECOND YOU GET OLDER AND OLDER',
					description: 'ROBLOX BUT EVERY SECOND YOU GET OLDER AND OLDER Subscribe to 2nd ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/t7RKFD0RORA/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/t7RKFD0RORA/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/t7RKFD0RORA/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Frostbite Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-12T03:45:03Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'JeTkMdw6RK8'
				},
				snippet: {
					publishedAt: '2022-05-22T18:00:05Z',
					channelId: 'UCIPPMRA040LQr5QPyJEbmXA',
					title: 'World&#39;s Largest Experiment!',
					description:
						'Thanks to Cheez-It and Pringles for sponsoring this video! Learn about the Build For Better contest and how you can get 350 ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/JeTkMdw6RK8/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/JeTkMdw6RK8/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/JeTkMdw6RK8/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'MrBeast Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2022-05-22T18:00:05Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'tTAcAecyKNg'
				},
				snippet: {
					publishedAt: '2023-06-06T03:45:03Z',
					channelId: 'UC9PD3EIAA-vtGLZgYXG3q0A',
					title: 'ROBLOX CHOP AND FROSTY UNLOCK SECRET ENDING IN COLOR OR DIE',
					description: 'ROBLOX CHOP AND FROSTY UNLOCK SECRET ENDING IN COLOR OR DIE Subscribe to 2nd ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/tTAcAecyKNg/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/tTAcAecyKNg/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/tTAcAecyKNg/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Frostbite Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-06T03:45:03Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'QA0Fsqv8Zcw'
				},
				snippet: {
					publishedAt: '2023-06-23T01:15:00Z',
					channelId: 'UCYNF5jpwZwxo9Yln1fLbMSw',
					title: 'PANDU GAMING MAKAN DAGING AK UNAT HIDUP HIDUP DI ROBLOX!!!',
					description: 'OK TEMAN TEMAN TRIMAKSIH SEMUAHNYA YANG SUDAH MELUANGKAN WAKTUNYA UNTUK MENONTON VIDEO INI ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/QA0Fsqv8Zcw/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/QA0Fsqv8Zcw/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/QA0Fsqv8Zcw/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'PANDU GAMING',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-23T01:15:00Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'No1BWjkq7Jg'
				},
				snippet: {
					publishedAt: '2023-07-12T20:12:14Z',
					channelId: 'UCNz9DcnzyaTJggK2k8B3DpA',
					title: 'Battle For Revolution | Season 1 |Final day 1| Glazer Games | Ft. #godlike #velocity   #soul #xspark',
					description:
						'"Gear up for the ultimate Underdogs vs. Pros showdown! The Glazer Games presents Battle for Revolution S1 with a prize pool of ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/No1BWjkq7Jg/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/No1BWjkq7Jg/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/No1BWjkq7Jg/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Glazer Games',
					liveBroadcastContent: 'none',
					publishTime: '2023-07-12T20:12:14Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'xbXKjorKDok'
				},
				snippet: {
					publishedAt: '2023-05-11T18:28:57Z',
					channelId: 'UCE-8FgcXvnAsb2EG1FizSyg',
					title:
						'গেমিং তালহা কে পাগলা গারদে পাঠালাম 😆  Itz Kabbo VS Gaming Talha 4 VS 4 কাস্টম চ্যালেঞ্জ  🔥 Free Fire',
					description: 'গেমিং তালহা কে পাগলা গারদে পাঠালাম Itz Kabbo VS Gaming Talha 4 VS 4 কাস্টম ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/xbXKjorKDok/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/xbXKjorKDok/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/xbXKjorKDok/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Itz Kabbo',
					liveBroadcastContent: 'none',
					publishTime: '2023-05-11T18:28:57Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'B8P_kBdqs5k'
				},
				snippet: {
					publishedAt: '2023-06-20T04:15:00Z',
					channelId: 'UCXaFhaxwH3ASTgwwKL4Kt2Q',
					title: 'SHINCHAN AND FRANKLIN TRIED IMPOSSIBLE SQUARE DEEP TUNNEL BOOSTER PARKOUR CHALLENGE GTA 5',
					description: 'SHINCHAN AND FRANKLIN TRIED IMPOSSIBLE SQUARE DEEP TUNNEL BOOSTER PARKOUR CHALLENGE GTA 5 ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/B8P_kBdqs5k/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/B8P_kBdqs5k/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/B8P_kBdqs5k/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Yippi Gaming',
					liveBroadcastContent: 'none',
					publishTime: '2023-06-20T04:15:00Z'
				}
			},
			{
				kind: 'youtube#searchResult',
				id: {
					kind: 'youtube#video',
					videoId: 'WTpqawHVbI4'
				},
				snippet: {
					publishedAt: '2023-04-17T18:43:56Z',
					channelId: 'UCE-8FgcXvnAsb2EG1FizSyg',
					title:
						'Grandmaster টপ লবিতে SRBD Gaming পড়লো 😱 Double AWM দিয়ে Grandmaster King এর সাথে 1 VS 4 🔥 Free Fire',
					description: 'Grandmaster টপ লবিতে SRBD Gaming পড়লো Double AWM দিয়ে Grandmaster King এর সাথে 1 VS 4 ...',
					thumbnails: {
						default: {
							url: 'https://i.ytimg.com/vi/WTpqawHVbI4/default.jpg',
							width: 120,
							height: 90
						},
						medium: {
							url: 'https://i.ytimg.com/vi/WTpqawHVbI4/mqdefault.jpg',
							width: 320,
							height: 180
						},
						high: {
							url: 'https://i.ytimg.com/vi/WTpqawHVbI4/hqdefault.jpg',
							width: 480,
							height: 360
						}
					},
					channelTitle: 'Itz Kabbo',
					liveBroadcastContent: 'none',
					publishTime: '2023-04-17T18:43:56Z'
				}
			}
		]
	}
	const testData2 = {
		contents: [
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaQuO-CM0PUj_bFh2WTLO0bxOE8GCcarkQPeaSTU8w=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@penguinz0',
						channelId: 'UCq6VFHwMzcMXbuKyG7SQYIg',
						title: 'penguinz0'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 3592,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/wePxGlJ5nY0/mqdefault_6s.webp?du=3000&sqp=COTs2qUG&rs=AOn4CLCXIUix7ilENLgjr6QjIvuJezUBjA',
							width: 320
						}
					],
					publishedTimeText: '1 day ago',
					stats: {
						views: 1882053
					},
					thumbnails: [
						{
							height: 270,
							url: 'https://i.ytimg.com/vi/wePxGlJ5nY0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCw6ctF3ch8MQsZSYEh1lOvZArnUA',
							width: 480
						}
					],
					title: 'This AI Killed 3 People',
					videoId: 'wePxGlJ5nY0'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaRw_oXPjeE5HxfiXR64HKeDnghO8HeXReNSkpbeoA=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@GarandThumb',
						channelId: 'UC0RBTQIYLEQbcahZWkmzeTQ',
						title: 'Garand Thumb'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 1024,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/uSrWpH-nLmo/mqdefault_6s.webp?du=3000&sqp=CJyJ26UG&rs=AOn4CLCQNC0WHgqcgTh0bWyQSNGmWofKaA',
							width: 320
						}
					],
					publishedTimeText: '2 days ago',
					stats: {
						views: 1189520
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/uSrWpH-nLmo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLChi7heFoxZ-hkapFeVnwNufnSvpg',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/uSrWpH-nLmo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC796zflIX56OwHGBmcVUckIBr_FA',
							width: 720
						}
					],
					title: 'How Deadly Is A 22 Pistol? 22 Pistol vs Human',
					videoId: 'uSrWpH-nLmo'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ACb7WCvh_0AFFlMLgDe0Mz5k8H5gxis_HErwYaHp0b14dz1RRbXngYzIbE_xjVgnVuI5gRXN=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@FoodTheory',
						channelId: 'UCHYoe8kQ-7Gn9ASOlmI0k6Q',
						title: 'The Food Theorists'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 694,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/42rA4LkXgvE/mqdefault_6s.webp?du=3000&sqp=CKT32qUG&rs=AOn4CLCon3TkcivKd0nCFUwQYoglETyAQg',
							width: 320
						}
					],
					publishedTimeText: '2 days ago',
					stats: {
						views: 1875378
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/42rA4LkXgvE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAyef0vF9CNPOFHZQ-VTsu3tHn3bw',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/42rA4LkXgvE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDkFRrs2y-5aMzUtHPuaqGh84U2KQ',
							width: 720
						}
					],
					title: 'Food Theory: I Solved the Grimace Shake MURDERS! (McDonald’s)',
					videoId: '42rA4LkXgvE'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/PLsX6LIg5JbMJR9v7eTD7nQOPmZN16_X7h_uACw5qeWLAewiNfasZFsxQ48Dn8wZ_4McKUPZSA=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@failarmy',
						channelId: 'UCPDis9pjXuqyI7RYLJ-TTSA',
						title: 'FailArmy'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 3072,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/-GJFSmpZjCw/mqdefault_6s.webp?du=3000&sqp=CODt2qUG&rs=AOn4CLAb9sbpVP_TFXMVQXXlcC7T1VPB1A',
							width: 320
						}
					],
					publishedTimeText: '13 days ago',
					stats: {
						views: 20495640
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/-GJFSmpZjCw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBYDZMOZNSx_pqO-vMeW8mLRP0ZOA',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/-GJFSmpZjCw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCelrMRKuN_J_7j-fjPMP4p31zxTw',
							width: 720
						}
					],
					title: 'Best Fails of the Year (So Far) 2023',
					videoId: '-GJFSmpZjCw'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaTiO2r86FXbupOVrRDeNreuprxfblIOdXy72wVamw=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@NaturalWorldFacts',
						channelId: 'UCG5_BraUMNcluZPZ__oOeKg',
						title: 'Natural World Facts'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 814,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/VoEVezcE0k0/mqdefault_6s.webp?du=3000&sqp=CLjq2qUG&rs=AOn4CLCfLEkr_rxNqCpkenNbs2651IJfKQ',
							width: 320
						}
					],
					publishedTimeText: '2 years ago',
					stats: {
						views: 18347978
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/VoEVezcE0k0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBGYGOd39NItrVoDqvQ5TA1F3bl-g',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/VoEVezcE0k0/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQyAgJI2msnpVRrW0wNWxA9e-J6A',
							width: 720
						}
					],
					title: 'Mariana Trench | In Pursuit of the Abyss',
					videoId: 'VoEVezcE0k0'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaSe-ifBRtdfb67uDM8kaHdhdPdQny-MaSRdBfT2NA=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@MrBeast',
						channelId: 'UCX6OQ3DkcsbYNE6H8uQQuVA',
						title: 'MrBeast'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 887,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/48h57PspBec/mqdefault_6s.webp?du=3000&sqp=COGL26UG&rs=AOn4CLA90oAzCpIW_Yo9tbcePsntkBHY-g',
							width: 320
						}
					],
					publishedTimeText: '1 month ago',
					stats: {
						views: 167817384
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/48h57PspBec/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzkgaz8opZz3zgUWwTkZD-ZyLlyw',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/48h57PspBec/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAJBpWWLWeY_BByqQOOIwGkoo6bgw',
							width: 720
						}
					],
					title: '$1 vs $1,000,000,000 Yacht!',
					videoId: '48h57PspBec'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaQJEC_hqWQ6HxYEC2ujru9UhgXka_yVrCVP6-Ve6w=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@AMPEXCLUSIVE',
						channelId: 'UCJbYdyufHR-cxOuY96KIoqA',
						title: 'AMP'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 2259,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/ZSnGqzaTNlc/mqdefault_6s.webp?du=3000&sqp=CNTo2qUG&rs=AOn4CLB_-sMIiSV8jfiNX05GD8xRaWIsgg',
							width: 320
						}
					],
					publishedTimeText: '4 weeks ago',
					stats: {
						views: 5491133
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/ZSnGqzaTNlc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBOTfPl4EUVjbihGX0nvtGQRWkNvw',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/ZSnGqzaTNlc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjptMbshMo98wkEaym5cl4ppBGsg',
							width: 720
						}
					],
					title: 'AMP MMA BASKETBALL',
					videoId: 'ZSnGqzaTNlc'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaQxz6XzFOBAqYBwjtif2Cy-6vYh0Pb89RRrH6NR=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@DharMann',
						channelId: 'UC_hK9fOxyy_TM8FJGXIyG8Q',
						title: 'Dhar Mann'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 977,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/tdo_ifOg-Jo/mqdefault_6s.webp?du=3000&sqp=CJj92qUG&rs=AOn4CLCUzWiuZf_u8_nwX0v6lxNQpiiFDQ',
							width: 320
						}
					],
					publishedTimeText: '17 hours ago',
					stats: {
						views: 1736607
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/tdo_ifOg-Jo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCcyv63mBufBWrHvNqlHi2M_hNn1w',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/tdo_ifOg-Jo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4eNM24Q_chaDskus9RURTZGVR2g',
							width: 720
						}
					],
					title: "GUY SHAMED For WORLD'S CHEAPEST PROPOSAL, He Instantly Regrets It | Dhar Mann",
					videoId: 'tdo_ifOg-Jo'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/IVVrue_WHD9lK-12DvplMxKoxOYOS2kjYl1tbhC_fONBK06E-YfdEdtScQNwWQUbxrHfwnxBgw=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@HISTORY',
						channelId: 'UC9MAhZQQd9egwWCxrwSIsJQ',
						title: 'HISTORY'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 2605,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/HTCwYu_1tbg/mqdefault_6s.webp?du=3000&sqp=CMiC26UG&rs=AOn4CLA-qqnSZgd9tG1TvNbrBwjbVxY8Yg',
							width: 320
						}
					],
					publishedTimeText: '2 days ago',
					stats: {
						views: 284770
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/HTCwYu_1tbg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATHCnoIhXiIVo_8Yy-582BswJExg',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/HTCwYu_1tbg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCJ57D3lcpka93pM3nWwBwO-Hnwlg',
							width: 720
						}
					],
					title: 'Modern Marvels: The Surprising World of Cold Cuts (S13, E43) | Full Episode',
					videoId: 'HTCwYu_1tbg'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/w5ro-_bb63OsrOT7bQdyhNFY6RVRDFarjL3kuxSGLExn4e4L003UW5DylgAtlwvZ9ZdseFGTIbE=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [],
						canonicalBaseUrl: '/@ordijaved2203',
						channelId: 'UCvKJ1YjF-Fp9AbY6qUMuknA',
						title: 'R&B Hits'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 4758,
					movingThumbnails: null,
					publishedTimeText: '3 months ago',
					stats: {
						views: 8275323
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/jzNnLnKS214/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAh0NsNOYmrS1gO7k5ARICW4gq_og',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/jzNnLnKS214/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLANfZoDzWXXs84VplsE4ESQR0gXGw',
							width: 720
						}
					],
					title: '2000s R&B Party Mix - Ne Yo, Beyonce,Mary J Blige, Usher, Chris Brown',
					videoId: 'jzNnLnKS214'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaRGATFXzfF90Il2G7kRdPjWHHws3uhW4slPQ9w8qg=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@MrHeangUpdate',
						channelId: 'UCEjA5F8lg5ntTbS7WDeRDFA',
						title: 'Mr.Heang Update'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 1565,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/XyyeLpmPPPY/mqdefault_6s.webp?du=3000&sqp=CJD82qUG&rs=AOn4CLDDtqQ9wB5PX3dy_vu7_lhWyDYvaA',
							width: 320
						}
					],
					publishedTimeText: '4 weeks ago',
					stats: {
						views: 33767104
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/XyyeLpmPPPY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCZF9nVZIB1R2bGKrmqkRzSPGvX5g',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/XyyeLpmPPPY/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC9174dn6dBUKp9v9LV3smw2_Sf_w',
							width: 720
						}
					],
					title: 'Building a Private Pool in a Luxury Underground House in 149 Days',
					videoId: 'XyyeLpmPPPY'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/VpZCVotOiza-63vmKrOD5foafl7aYiQuA1vEQMh6_1kNM4mHgo9r7glbYZbrMhAS9cPNoobo=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [],
						canonicalBaseUrl: '/@1hofmemes',
						channelId: 'UCzB-Jbha1s31df6lgpMh5aQ',
						title: '1H OF MEMES'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 3600,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/UdoqJHZjR-4/mqdefault_6s.webp?du=3000&sqp=CJyO26UG&rs=AOn4CLC0qyeTdL4MSdiZd9Bq9Zd6_sIR4g',
							width: 320
						}
					],
					publishedTimeText: '5 months ago',
					stats: {
						views: 3735245
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/UdoqJHZjR-4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjScZoR3uOHZvLkoUpWEEs365S0g',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/UdoqJHZjR-4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzRmPPcvl3Uk--Vik5ZUKBcIiKrw',
							width: 720
						}
					],
					title: '1H of Memes that are surprisingly funny',
					videoId: 'UdoqJHZjR-4'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaSzWSS7kZV2OBRNCIyvLEvEUAIUQO4mfsg7-VSnQes=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@NBCNews',
						channelId: 'UCeY0bbntWzzVIaj2z3QigXg',
						title: 'NBC News'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 676,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/_XkMR-yZRW8/mqdefault_6s.webp?du=3000&sqp=CKTz2qUG&rs=AOn4CLBZDAeyJMkEB_jxzrpiGGTS6W31gw',
							width: 320
						}
					],
					publishedTimeText: '2 days ago',
					stats: {
						views: 397808
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/_XkMR-yZRW8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAb6gjLg8l7NhvXza_yEW2lITS-iQ',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/_XkMR-yZRW8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKOs9UcsgM1CpEg19wFcXhgRf3Dg',
							width: 720
						}
					],
					title: '‘Real disconnect’ between cost of living and workers’ paychecks | Meet the Press Reports',
					videoId: '_XkMR-yZRW8'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/hiJcHbavYxVTr5jsmljZkWrZgMCgcXlaZgNAZ2AJ6JkVxk7wFxNAkWxu3VwQ-IGVgjKFaww1=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@60MinutesAU',
						channelId: 'UC0L1suV8pVgO4pCAIBNGx5w',
						title: '60 Minutes Australia'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 1042,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/kxud6ZQKmMw/mqdefault_6s.webp?du=3000&sqp=CID32qUG&rs=AOn4CLA8jlsOmINoV9d8yFHI26JP31eH3w',
							width: 320
						}
					],
					publishedTimeText: '2 days ago',
					stats: {
						views: 1050521
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/kxud6ZQKmMw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDNfY_tg6Juj0afbdjnaOv8QwlV8A',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/kxud6ZQKmMw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfZM2bPEdJWuRir0YMpWJvCI9dbQ',
							width: 720
						}
					],
					title: 'Why the Titanic sub imploded | 60 Minutes Australia',
					videoId: 'kxud6ZQKmMw'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaT6cx4gCYGwUmyHB43BVRzG5rJnXQMPL62Nacu5HQ=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@PrestonPlayz',
						channelId: 'UCJZam2u1G0syq3kyqrCXrNw',
						title: 'PrestonPlayz'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 1819,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/jDiEqO3hFUA/mqdefault_6s.webp?du=3000&sqp=COD32qUG&rs=AOn4CLDN3KW6R3s8RczvtK3b34L8951bIw',
							width: 320
						}
					],
					publishedTimeText: '10 months ago',
					stats: {
						views: 16719623
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/jDiEqO3hFUA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTnlDKJf_Qy4DoPoEBA3ammzhalg',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/jDiEqO3hFUA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1oxLPCKGXsDMd9y7xdLObxMSELw',
							width: 720
						}
					],
					title: 'Minecraft But Everything I Touch Turns To...',
					videoId: 'jDiEqO3hFUA'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/_BsIQ_sNpOtu2c9BNGSfGFpNTSwLPTzJpL774Q1v85Sc-uitgp8ouwljeN_6YtDlULLaGFY_6nM=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@SteveMould',
						channelId: 'UCEIwxahdLz7bap-VDs9h35A',
						title: 'Steve Mould'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 577,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/f9zyenX2PWk/mqdefault_6s.webp?du=3000&sqp=CKPa2qUG&rs=AOn4CLBlcPnfcNwZYWjQMCWNUBlYL6Sm1w',
							width: 320
						}
					],
					publishedTimeText: '2 months ago',
					stats: {
						views: 7836644
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/f9zyenX2PWk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCfZh-Wk82eO9I5tNFryjCnSFrtYg',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/f9zyenX2PWk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe3DpwQfHnVecboa2n8xnQTr1Nag',
							width: 720
						}
					],
					title: 'How these impossibly thin cuts are made',
					videoId: 'f9zyenX2PWk'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/BX-86ZOBf0fd-S8x11p3_8YuVb8ltarSJGTA0ltWlJh0e2E2z8qplQ8uQplpve8vDDrQWIErKw=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@DylanHuynh',
						channelId: 'UCOhzOImpPwT1klYmttywq3w',
						title: 'Dylan'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 620,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/qMPJ7fZ_Nek/mqdefault_6s.webp?du=3000&sqp=CK__2qUG&rs=AOn4CLAmYV7z6Yg0ONitDkX49MxCxXb4XA',
							width: 320
						}
					],
					publishedTimeText: '1 month ago',
					stats: {
						views: 2983266
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/qMPJ7fZ_Nek/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSuzvsHHBEvgqjkGWHZyOiypg5jQ',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/qMPJ7fZ_Nek/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBxKefDv5n3KjtWghUoU0RelBLt2g',
							width: 720
						}
					],
					title: "I Ate At The World's Oldest Restaurant",
					videoId: 'qMPJ7fZ_Nek'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaQ59sMp-MTB8-DSa2uk-TeZ5sxdKeWZT_yCl3UQYg=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@gottalentglobal',
						channelId: 'UCe_Fx4EZAgKjDz0aQ_Y7hSA',
						title: 'Got Talent Global'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 3054,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/n_NfxUQCoXE/mqdefault_6s.webp?du=3000&sqp=CM_C2qUG&rs=AOn4CLAbMXPD6sU52VWoUzWGgvb_jlQ73g',
							width: 320
						}
					],
					publishedTimeText: '3 weeks ago',
					stats: {
						views: 3243438
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/n_NfxUQCoXE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAkoEm9oWf5xBTMgp7Gb2TH5DS-qA',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/n_NfxUQCoXE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzc5UpP6GbeuJ7yjb5QwI_G1GJdQ',
							width: 720
						}
					],
					title: "America's Got Talent 2023 All AUDITIONS | Week 4",
					videoId: 'n_NfxUQCoXE'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaQ97DZWnavswgJGd0k1A_4-86luBhMtQ5uMnhf5BQ=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@Sidemen',
						channelId: 'UCDogdKl7t7NHzQ95aEwkdMw',
						title: 'Sidemen'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 3148,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/lz4R4FHFr90/mqdefault_6s.webp?du=3000&sqp=CI332qUG&rs=AOn4CLBvFwczYtF_VH5_NSCN8vBLaavaAA',
							width: 320
						}
					],
					publishedTimeText: '5 months ago',
					stats: {
						views: 47756578
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/lz4R4FHFr90/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLByP3zcrLV8k4f1LH5JR-RHCTXGSg',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/lz4R4FHFr90/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmBtHXkRPZWY6r_p9v-WLcMSw3Tg',
							width: 720
						}
					],
					title: '20 WOMEN VS 1 SIDEMEN: KAI CENAT EDITION',
					videoId: 'lz4R4FHFr90'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/OAjxW8jTr-NQQDE3E7XIGmzb0CuzjuF0lfZXAZcMKLCMpVTYNqxTO1XlmPDmFeA_P86lEuCV0g=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [],
						canonicalBaseUrl: '/@master_samwise',
						channelId: 'UC0-KkYSGKMNMmssOuN2AdfA',
						title: 'Master Samwise'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 781,
					movingThumbnails: [
						{
							height: 180,
							url: 'https://i.ytimg.com/an_webp/YmWgp4K9XuU/mqdefault_6s.webp?du=3000&sqp=CJr-2qUG&rs=AOn4CLB3pQRK2MnJGA8Typ0WfMYvgiLfbQ',
							width: 320
						}
					],
					publishedTimeText: '3 days ago',
					stats: {
						views: 895663
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/YmWgp4K9XuU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDzqzyV0It-iCzDKe51En5J8eLzAA',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/YmWgp4K9XuU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqWY-LjwJoRtua7vIrWjBYj7d-qQ',
							width: 720
						}
					],
					title: 'Audiences Hate Bad Writing, Not Strong Women',
					videoId: 'YmWgp4K9XuU'
				}
			},
			{
				type: 'video',
				video: {
					author: {
						avatar: [
							{
								height: 68,
								url: 'https://yt3.ggpht.com/ytc/AOPolaQUtUeCxaxQtCAik50pxuhaxQvfWxTZkqr_0RDv=s68-c-k-c0x00ffffff-no-rj',
								width: 68
							}
						],
						badges: [
							{
								text: 'Verified',
								type: 'VERIFIED_CHANNEL'
							}
						],
						canonicalBaseUrl: '/@QuietQuest',
						channelId: 'UC1dVfl5-I98WX3yCy8IJQMg',
						title: 'Quiet Quest - Study Music'
					},
					badges: [],
					isLiveNow: false,
					lengthSeconds: 14201,
					movingThumbnails: null,
					publishedTimeText: '1 year ago',
					stats: {
						views: 5765926
					},
					thumbnails: [
						{
							height: 202,
							url: 'https://i.ytimg.com/vi/m80E1K75vDI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBjsbADmXeKa92iigDEkU-dYeSa-A',
							width: 360
						},
						{
							height: 404,
							url: 'https://i.ytimg.com/vi/m80E1K75vDI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA337Z-2wa3XFpKtKHbW9CAJlGhCw',
							width: 720
						}
					],
					title: '4 Hours of Music For Studying, Concentration And Work - Ambient Study Music to Concentrate',
					videoId: 'm80E1K75vDI'
				}
			}
		]
	}
	let videos,
		videoCards = []
	const selectedCategory = useCategory().selectedCategory
	const theme = useTheme().darkTheme ? 'dark' : 'light'

	// Fetch videos and create video cards
	if (selectedCategory === 'Home Page') {
		// Home Page videos are fetched from different API, so cards needs to render in a different way.
		// fetchHomePageFromAPI().then(data => console.log(data))
		videos = testData2.contents
		// Map video cards
		videoCards = videos.map((video, i) => (
			<VideoCard
				key={i}
				videoTitle={video.video.title}
				channelName={video.video.author.title}
				thumbnail={video.video.thumbnails[0].url}
				publishDate={video.video.publishedTimeText}
			/>
		))
	} else {
		videos = testData.items.slice(1)
		videoCards = videos.map((video, i) => (
			<VideoCard
				key={i}
				videoTitle={video.snippet.title}
				channelName={video.snippet.channelTitle}
				thumbnail={video.snippet.thumbnails.high.url}
				publishDate={new Date(video.snippet.publishTime).toLocaleDateString('en-gb', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			/>
		))
	}

	return (
		<section className={`home section section--${theme}`}>
			<div className='section__wrapper'>
				<h2 className='section__title'>{selectedCategory}</h2>
				<div className='section__cards'>{videoCards}</div>
			</div>
		</section>
	)
}
