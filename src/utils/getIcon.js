export const getIcon = sectionName => {
	switch (sectionName) {
		case 'History':
			return 'M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5Q783-687 811.5-622T840-482q0 75-28.5 141t-78 115Q684-177 618-148.5T477-120Zm128-197L451-469v-214h60v189l137 134-43 43Z'
			break
		case 'Playlists':
			return 'M100-330v-60h306v60H100Zm0-165v-60h473v60H100Zm0-165v-60h473v60H100Zm542 540v-322l218 161-218 161Z'
			break
		case 'Trending':
			return 'm123-240-43-43 292-291 167 167 241-241H653v-60h227v227h-59v-123L538-321 371-488 123-240Z'
		case 'Music':
			return 'M393-120q-63 0-106.5-43.5T243-270q0-63 43.5-106.5T393-420q28 0 50.5 8t39.5 22v-450h234v135H543v435q0 63-43.5 106.5T393-120Z'
		case 'Gaming':
			return 'M450-635v-28q-43-11-71.5-45.992Q350-743.983 350-790q0-53.857 38.101-91.929 38.101-38.071 92-38.071T572-881.929q38 38.072 38 91.929 0 46.017-28.5 81.008Q553-674 510-663v28l300 173q14.25 8.171 22.125 21.914Q840-426.343 840-410v100q0 16.343-7.875 30.086Q824.25-266.171 810-258L510-85q-14.328 8-30.164 8Q464-77 450-85L150-258q-14.25-8.171-22.125-21.914Q120-293.657 120-310v-100q0-16.343 7.875-30.086Q135.75-453.829 150-462l300-173Zm0 397L180-393v83l300 173 300-173v-84L510-238q-14.328 8-30.164 8Q464-230 450-238Zm0-182v-146L225-436l255 147 254-148-224-129v146h-60Zm29.882-300Q509-720 529.5-740.382q20.5-20.383 20.5-49.5Q550-819 529.618-839.5q-20.383-20.5-49.5-20.5Q451-860 430.5-839.618q-20.5 20.383-20.5 49.5Q410-761 430.382-740.5q20.383 20.5 49.5 20.5ZM480-137Z'
		case 'Sport':
			return 'm123-159-43-43 174.092-174.092Q287-409 301-458.5T315-597q0-56.976 25-111.988T416-815q88-88 193.086-100Q714.172-927 782-859q68 68 56 174T738-491q-51 51-106.012 75T520-392q-89 0-139.5 13T297-333L123-159Zm290-332q49 49 133 36.5T697-534q66.876-66.583 79.938-149.292Q790-766 741-815t-132.5-36.5Q525-839 458-772t-80.5 149.587Q364-539.825 413-491ZM736-40q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102T736-40Zm0-60q36 0 60-24t24-60q0-36-24-60t-60-24q-36 0-60 24t-24 60q0 36 24 60t60 24Zm0-84Z'
		case 'News':
			return 'M140-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h680q24 0 42 18t18 42v600q0 24-18 42t-42 18H140Zm0-60h680v-600H140v600Zm109-106h462v-60H249v60Zm0-166h155v-222H249v222Zm259 0h203v-60H508v60Zm0-162h203v-60H508v60ZM140-180v-600 600Z'
		case 'Dark Theme':
			return 'M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q8 0 17 .5t23 1.5q-36 32-56 79t-20 99q0 90 63 153t153 63q52 0 99-18.5t79-51.5q1 12 1.5 19.5t.5 14.5q0 150-105 255T480-120Zm0-60q109 0 190-67.5T771-406q-25 11-53.667 16.5Q688.667-384 660-384q-114.689 0-195.345-80.655Q384-545.311 384-660q0-24 5-51.5t18-62.5q-98 27-162.5 109.5T180-480q0 125 87.5 212.5T480-180Zm-4-297Z'
		case 'Light Theme':
			return 'M479.765-340Q538-340 579-380.765q41-40.764 41-99Q620-538 579.235-579q-40.764-41-99-41Q422-620 381-579.235q-41 40.764-41 99Q340-422 380.765-381q40.764 41 99 41Zm.235 60q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM70-450q-12.75 0-21.375-8.675Q40-467.351 40-480.175 40-493 48.625-501.5T70-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T170-450H70Zm720 0q-12.75 0-21.375-8.675-8.625-8.676-8.625-21.5 0-12.825 8.625-21.325T790-510h100q12.75 0 21.375 8.675 8.625 8.676 8.625 21.5 0 12.825-8.625 21.325T890-450H790ZM479.825-760Q467-760 458.5-768.625T450-790v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-890v100q0 12.75-8.675 21.375-8.676 8.625-21.5 8.625Zm0 720Q467-40 458.5-48.625T450-70v-100q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T510-170v100q0 12.75-8.675 21.375Q492.649-40 479.825-40ZM240-678l-57-56q-9-9-8.629-21.603.37-12.604 8.526-21.5 8.896-8.897 21.5-8.897Q217-786 226-777l56 57q8 9 8 21t-8 20.5q-8 8.5-20.5 8.5t-21.5-8Zm494 495-56-57q-8-9-8-21.375T678.5-282q8.5-9 20.5-9t21 9l57 56q9 9 8.629 21.603-.37 12.604-8.526 21.5-8.896 8.897-21.5 8.897Q743-174 734-183Zm-56-495q-9-9-9-21t9-21l56-57q9-9 21.603-8.629 12.604.37 21.5 8.526 8.897 8.896 8.897 21.5Q786-743 777-734l-57 56q-8 8-20.364 8-12.363 0-21.636-8ZM182.897-182.897q-8.897-8.896-8.897-21.5Q174-217 183-226l57-56q8.8-9 20.9-9 12.1 0 20.709 9Q291-273 291-261t-9 21l-56 57q-9 9-21.603 8.629-12.604-.37-21.5-8.526ZM480-480Z'
		default:
			return 'M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z'
			break
	}
}
