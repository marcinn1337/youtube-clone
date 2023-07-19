import AdvancedVideoCard from '../components/AdvancedVideoCard'
import { useTheme } from '../context/ThemeContext'

export default function SearchResultsPage() {
	const testData = {
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
	const theme = useTheme().darkTheme ? 'dark' : 'light'
	let videos,
		videoCards = []

	videos = testData.contents
	// Map video cards
	videoCards = videos.map(({ video }, i) => (
		<AdvancedVideoCard
			key={i}
			videoTitle={video.title}
			channelName={video.author.title}
			thumbnailUrl={video.thumbnails[0].url}
			publishDate={video.publishedTimeText}
			views={video.stats.views}
			avatarUrl={video.author.avatar[0].url}
			channelBadge={video.author.badges[0]}
		/>
	))
	return (
		<main className={`main-content main-content--${theme}`}>
			<div className='center-wrapper'>
				<div className='search-results'>{videoCards}</div>
			</div>
		</main>
	)
}
