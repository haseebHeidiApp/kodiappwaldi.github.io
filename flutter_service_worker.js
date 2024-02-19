'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "8bb435ab703d3f4c95de4c685e510c27",
"index.html": "ecd07918aa3338c4448e6d3cf123020b",
"/": "ecd07918aa3338c4448e6d3cf123020b",
"css/style.css": "4f4f41c6d1194198381733bd11e84fdc",
"css/style-old.css": "d1e5df9de01089cf98513341298876d3",
"js/demo-css-fx.js": "f423e0beaf767570462f9b065aa1b68a",
"js/demo-js-interop.js": "71141ae1f328ae1c7ec379b7b7cd9ecd",
"main.dart.js": "8fb46db1133ce4993c1e07ac5fecb403",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/bg-mob.png": "6e619e9ffb4a86f7d2b86b328626b311",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "455a6ea757df715f58e7d1aade34715d",
".git/config": "fc2cedfa47b470fa845d0d1597386290",
".git/objects/92/d8a3688a5fe9a0e91f7251b0e14cf60efc7643": "10fd3449f0ea5a2ef55e2e961f70b76e",
".git/objects/3e/6c942233c69f6b30cb8e8cdb4eea44b350586f": "a2e21b1c29619d5ed2b41322316f4ed6",
".git/objects/9b/f9b4e97b6576c8cc3d4527073731fd9cc57493": "04889bdee9eb2a0d199d4f4113c377ce",
".git/objects/9b/2fe92ba4ec4aeafdba6f7782a905266cba516a": "5bbf2f231872ce5c03e73252cd2cbf7d",
".git/objects/9e/70be6a9ef052bd26e248428cb4db214663afca": "d5fbd6ae192ce2144bda4b1ab8f84862",
".git/objects/04/5f2041383c8b95d1d4c48f6c296fe6ef728ec0": "cdad773ebdf181b11b1078837f4cb281",
".git/objects/6a/bf43e0b4b4d8bd44c8d289b1e256b183430326": "8ce97765bc322bbca0523a6e315805c4",
".git/objects/32/65c885b71eaccb28e5788173005999a1b99d43": "55914af679dedffba1826391515a7913",
".git/objects/35/267989deca17116c70c987e90035303e2e3404": "50c87c2481cc197e8d549e03b7ac507c",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/a979fa00e7d29b9e64fef08f11a0a31c639af9": "0cb0880662942f8f77036db78be851d7",
".git/objects/69/b708dff377084f2aacfec8cbe172e439f5334b": "02c27afd7acda6e328c25cb84797e80d",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/3c/62930b4cd33a7fd99d3ccd16d59aa9968294d7": "2fe45b1588664fa4b2caf7bf155fe58a",
".git/objects/3d/c262a856fd76ab0a9919eb4d630622c429a2b2": "3f65d4784f68ad39a1faf0520571d4c8",
".git/objects/3d/b3b9f56a15a11635a357605945a0bd80d8382e": "6e49d26cdc54824caef273755a09231c",
".git/objects/67/80461f9d97a08885961d0cd835bd2d04570b97": "a85f0383a0d7e5682664ee82e7c8ff34",
".git/objects/67/fcf0fb2af0c069495fbc7fe7ab0e442a86e357": "1a79be5246f5dff458e8e5299ce23f14",
".git/objects/0b/3de91e9724021e231527ba1b0268a6fb1ddcce": "460e4554febfbbe04c52491edee182a0",
".git/objects/93/bdc0279f72bdca5657a7ef226b4c5aa4961382": "eb35fa8dec3301153a57290a64ca1ff5",
".git/objects/94/1e74ae38b52902c010fb88f29abc93d285169e": "294a05101ee279ce1ba1d21b803d44cc",
".git/objects/0e/deac3a1e484bea0e093d12fe0d2929b7182c2f": "5de12dca9b9b283e8a067c56eb371b83",
".git/objects/0e/7581b38634dbf56f8b9c4fa72d0d4546eb2d33": "6acee64f785e2ac8476a2b86691694dc",
".git/objects/0e/407772f9c3eb74cde854614a320adbd9422d1e": "866877dd6bb2c0dfbfb8d3e521e6efe3",
".git/objects/34/db42061781f5b440f5aaee869db2cf38cc18a0": "b5ee10a9d78948908ed824e26576dc09",
".git/objects/5f/b09d9a7302c370ac95f0dd4930b3e81e337fc8": "a0f752dd226f05f3518029b1486903a9",
".git/objects/5f/06ef648616c8eb964a7de75664017e7fdf841d": "24a21d1f6ddafb1c139b528f66c54f6c",
".git/objects/b5/ec48606046c16a75279085f594a90509745449": "2e6d59f6f6bf84e302d062fbebd73151",
".git/objects/b2/e7663d7a0933422e96a1b51326268b68a4cf30": "e90a12a044ab3266db9f5debaebbd9c3",
".git/objects/d9/98cf5b468413ca1c950096dc9d0f5dfdb1359f": "872d06090d2311cd71232a001d72623a",
".git/objects/d9/3d9b1e69838bb7ca8dcf4c4240ace94c5cc105": "f2ebb3cf6bdd0a0744b287f639e20db2",
".git/objects/ac/63ea76a0b4dbb9b2c92802dee0842ae4e1d8f0": "47053ececa8feacf83d6c6cf3033f2c2",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/e9ca6ff8c11ec28ab686226e1a21a5983d54fc": "c1881c9f4b82af88f08e54cb6409e586",
".git/objects/ad/9103b37ecff4496fd96f7c388f87ff700c09e1": "6ff4fb0495f4cba6aa6cbee1698193a7",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bb/608a6b92080dc04acb679ba5832d6100f59ad4": "cc0e28bb1258a02ea9c8cf9421dcf454",
".git/objects/d0/99b781a7ffb3b6cbe8bb4fe44eae9fc5674105": "2b8c7325192b20b128894305964dcbc7",
".git/objects/d0/234f46896a1111adbf0e6392180b37e7dd03f5": "44766d04d44aa155408d9a6d879f9bbb",
".git/objects/df/7093608a7eb6173529ce9eeeb4d46e3a8290e5": "151239f49193115888a1b60c3a47cefb",
".git/objects/b4/e22103936078c50cdc7ddf7a3e2d51dd2d3c44": "dea5fe604cb7b8d6a367fb17b01c8584",
".git/objects/a2/64c990127d5eec50719469ef4a9e5d70ae2e1c": "e2bb104be80031758caa405dc6610ec1",
".git/objects/a5/bb445fc15f2b36deab22b01f73e9e6a818f1b4": "0aacac8aa314876a1359540893f83f71",
".git/objects/bd/61842db8adf8ea1ecaae2c7cd189d7f03cc22b": "bd2f132ef8a0b9efedcf6b470e5f753a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/e32239df80e3081f592068888ef9c79afb41f5": "b83ea641f66fb3df5da662f465a6bdf1",
".git/objects/ae/9065932d3022191630532b5077d5551f6f55f6": "0301fab3f0d4aac38842c95e2bddfd3d",
".git/objects/ae/bcf1421226d045b8043d26433d780fa365b7de": "dab936ce465bf4fc9ba11ea7a42a16aa",
".git/objects/d8/72f6ca8c62b9395bb94b722d5b6c8d979a1917": "2f99e6b164344e6fde207478e227f687",
".git/objects/ab/0069487225be38c8c26fd6878b128ca88bbefb": "7d8bc9969e87cd62df394722b243884e",
".git/objects/f4/e14ac2f0a5d7872666c4389a67bd7c3efb1d86": "6e9439d2758d9ffc5d1b3ff072d10f9e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/fdca51e9ee2a3f930b0b2a79343ec869fe2636": "0fea23d74ca531eea1e1eb13cfd192da",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/c0/9da419fd8c162e0f7287de5c09c3700370af83": "6653de5f4f8561c23cdd7dc7f9fec43c",
".git/objects/ee/a836f4a37fea4afe61d6483692dc431a9b1c20": "a7cab6b495018984cd39f6310f99d9e0",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fd/b2ddf0f3a9356240846be7cd9ec66f6febd068": "f3cb02f946c59bd8a0bad7631bf1bb92",
".git/objects/f2/0c1460bb0ddf47a857da8e1fc8823ffb9f639b": "8639f0d92a620746f2c62b93cca50541",
".git/objects/f5/ecc90826d9beb022be1f3bb28791f2d5ceb751": "3661671ee66d7ae7ff3a1a6ce5ba01a7",
".git/objects/ca/43b3741d810dac5455ab35d0522d29fce67b76": "269dd29b2a4ad9288a53b192b154b1c7",
".git/objects/ca/c13554e03efe599d5b1e432fcb0e7b002b021c": "af7b99f8628bb4fc13713c625fbc3a4e",
".git/objects/ca/d73f073f3f34ac72a31f79166a5a916e8519b6": "10f7d43ee9a5fe0b1e8a49c28d318283",
".git/objects/fb/608f21fa18bdb089aa3678150184313b974775": "8b8d4c481b9601732198d98b3e54d298",
".git/objects/c6/374c0ac303926a84930c5c9ccc3a7f8201970b": "d3fa97a92364dee4ba23151fb26ab563",
".git/objects/ec/0d30503d7cbf1d7dcc26b12318a1fa6bb0bedc": "888f65b2ae7646044c9a76d641ab979e",
".git/objects/4e/797cf7ef9758a9209fae4e0b07e6b186b2c69d": "45a46ebf637590e5cc3e7871ba7ccfd3",
".git/objects/18/da9e5b0a8b30db8401c3c09fd99bb9868fa393": "ed3eaf5db1347835e3fa3512432297ec",
".git/objects/4b/bb26fe62f3303f3277b7843f104caf103ff7b2": "0523cb710a11de201a506a3653910739",
".git/objects/11/7856707b9b867863a9b48b127f756ee25fe109": "614a81cd1b1a3fecab1984a7112bc50a",
".git/objects/29/5bd7ef7bbd5a0ec02ffca46e730325632998b4": "3fbc78a3c3d8c26c223ebcaefceec7a8",
".git/objects/29/bfd35a2bfdd92b6e8b4ec2970f4d1eebf49357": "7a3021e789f7e98c6a0ecc90a27556e3",
".git/objects/29/a4359ed0ba945a1af87078f3c0f08d298b0285": "c9950050390c4b4ad98b39a19214d607",
".git/objects/16/ea25ef6a549a39e3efabf29512bd5615c04115": "c59a539478845753aee9efe90700c759",
".git/objects/42/08b5a107b019e90d3639ff052052ecea2763b0": "31437be876ed622a48a00343690114c9",
".git/objects/42/65aa3f72f74778c02a47bed686b8a5a3ef3c23": "31b556780e27083ec6b7e5f26fe942d3",
".git/objects/42/74457861816c7442ef0bbf250c9d0f88987b50": "36760a7b3e044355ddf59781621314fe",
".git/objects/87/218e518a0d4ac26241aaa5cee16b5697be7bea": "95745373b87a5ce9d1d39c0499c9af76",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/74/6c2423833c7d2dbcb7bd41a678a6bf585c5a38": "f507d59002a65010d339632cde80fafc",
".git/objects/17/9acf3fb16697c9e30cb5021cd613ce3eb7d4c9": "4ec59ab7875484dcc5000a3e113fe38d",
".git/objects/8f/a1b3fc9b574ebf0a5e675190381aa57dfd39ab": "f66bec6ae4d40e4ae84ac82ef858a263",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/9f66ad3107682dd0c7cec8ad187bf87210a966": "04f77657a58db046d9d287b3ca25d360",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/86/95b0dae3eab1c091bd6698b42f39f65259518a": "d00c0089a77863e8bc2b38d5a2b0e840",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/72/bcf6a372374d4dadf8f26a949ea3fab825143a": "8e9b017c96e36c2ecf1142aa54c5e7f6",
".git/objects/44/bb53b2f43c9fc229467e93312511fe957c2789": "c751cd27c51a1c75e23b5b5abf94c77f",
".git/objects/2a/7c399b0adb4ed7a6ca4fbbbaf6f75402f3a696": "4692896090ab414adb8b0a272da6c616",
".git/objects/2f/4d4d666d23aef47bc511978dbbe366f58fb396": "93bcfa878f5ae7ee147c8c17fb585789",
".git/objects/88/d5bbb21c439d095e5d0bc232b2ef5fd44bf13b": "ce708ca7ca3600004c4557843de785a2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/9f/6755f418678adc53deab33b21d80443e9af7cf": "1025eb524d739826d423a0e0b423c183",
".git/objects/6b/4b623465b8d88f9bc631e99291224f42995ae0": "1643c8fd2767c25fb4a9d15c1fa34cad",
".git/objects/07/0ac7691f74166f75f21695b2af7b4eef01b54c": "bf0d1dcf715a41ec28a239a590230f41",
".git/objects/38/4ad41dde4036ef10849622f2138d1088b3cca9": "8e6dd36a8e4ebfc8c2412798c3258382",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/6e/5db65357b5de3706ce71a88c7a0276c57070b1": "7b5def00c3ee0c87bf882a27f4052faa",
".git/objects/5c/88f926e940478e8f08edac1735715281668841": "176233a72558d8ff2e3619c62b2febcb",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5d/1229a5fc1a03269d754a99323f01519ab0d37a": "939e18d518c78e5c4572a27b1418551a",
".git/objects/5d/c6a2dc6c38c1b1ee54b0ad5072c6e29968ed24": "ce6d2eeb4535e5950986c78ab3686dd5",
".git/objects/5d/c05608fc3743fe8f78e5d57e26a8445d5aea99": "d602abaade53f2e2d1d86eaff1f63b5d",
".git/objects/5d/70f90ae18f129c2c671b43e4b3e535ed862903": "6765afd4009ed2b22da9f5435f47ac16",
".git/objects/91/30b4b3b145c97f0fb2eaec3133be75557944c6": "a53e961a00ef2b11c4ea4deb43696642",
".git/objects/65/80d3a169e895d914f159c060b947e36746f275": "34514d47340caad5197155b259bae4be",
".git/objects/96/7a68500122c9576e96f8f5800f10713dc233b7": "93077af5f36a20d00d831b6eff2865c5",
".git/objects/3a/330a8d94ff459ba80869a0644b6166a3b22f93": "dc3328ee147e459d57ceb2590d8e54d1",
".git/objects/54/e7059cf36359cb5a3860085714a95306af0dea": "84d83371b8598214017b309f9a987865",
".git/objects/98/6b8d5208b5b20172f634dc8dcc80bcb6766ba5": "aaaa4fed578fefc0798d55d8a9a47778",
".git/objects/5e/3134810e50f6c2d9388737ec58ea9a5f6de8ad": "7bc060a046206f2f71ad339456bda17f",
".git/objects/5e/853e83fc27a05830a5bb0b799735e5a69907ee": "7d8473310ad5d3aaf9b2de9a6dfc0f36",
".git/objects/5b/390ff950e6539bdfd4d84265fdb01e0c35f291": "dac6e694e07cee528be3bcb1da3beca8",
".git/objects/5b/bcd15feeb8b51e4e03210f67f58fd5cc392c16": "9c0bbbd21a0c654cc806087e7f84bac0",
".git/objects/08/d2d50ed345c351add364eefd95a70682a3674d": "1c1d8eadd1a0d2d09e3eb1fa3ee25a81",
".git/objects/08/6722809c74d5031c2427b31262de14e4a10560": "8eb0c7cd27a88f3912578a75b49ec598",
".git/objects/08/1644b7138d1ad6bae9664ef25f7b8d90eb8305": "d7ffbcb37f96c1eaf48d99007253b1a1",
".git/objects/08/9953f6c83a7a938e4bac95a042306961085d5b": "54e5c70b551c0b50a3664e4c85e51b8c",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/01/ab074373421040b329e5b94a53567f8947c8f8": "57d7520a734662eb1407ca8481f91d05",
".git/objects/01/c7517716479bab210a264965981be25996afdf": "d36f5648c151bf9517e9acba28a0eab3",
".git/objects/01/8b6f831e5a74082faccf1a4652bbbbed9cf051": "c98a13cfd7085fd2da76546bbf825ebf",
".git/objects/01/a66fe14857c7f3124d9cb0e0876a0675ee9eb7": "57b93dbf7c628327d71afe8bbc7249c1",
".git/objects/6c/aa2751142ebfae5b80bc03f2fa1847846c1739": "9b4d463a3ffc6a28d436034346b6aba3",
".git/objects/55/5f892c69c483e784a11bdd195fb228c37b23a0": "7ba1e526aeace18910a192f6e0652d36",
".git/objects/d3/fecf4563636640b4d46d89c0cc4445d939ee4e": "ae3a516183d2d99a792f675833f19baf",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/a0/157a56895035d8fb8d57b675782a418d4abc3d": "a3e3c7ab409178af05eeffed27e20267",
".git/objects/a0/85f52331dc3ddafa8075fcea30b8296c096322": "fa9b80f420a144ed2fdfae33d9305a6f",
".git/objects/b8/47cf8ff2717c886cd9dfd36c542d6d5ba00aed": "376b39b42fe11ce1ca4c8dfd3a8bc2ee",
".git/objects/b8/68764ea0d31c45eff121a8f0281e51bdb0d63b": "af9c53433036370111fb957a9e128132",
".git/objects/dc/d412f379afc5f0afddbdc0a4c905f4b2c21fde": "519c976c5e47b06ecd3f146f3b9a188c",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/6301de3bbee189a3eb7500e8a01f556b91dd77": "42feaf20f33359071f97bfe3a79cf2ac",
".git/objects/a9/142717ca253500ed072d66d7156ca330e76243": "768609bb9e1456866e3de74e0d4a675f",
".git/objects/a9/15f35ed625737a92ddee8a82f07118213bf94e": "7e07ebf87adecf16fd12174c2532623b",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d2/db573533a815d3a43ae3dc353790a3a8f268dd": "31ffe953de447cd3121b4ec324805832",
".git/objects/aa/1126903c75d5c5199302a629060c58f73ee259": "c5b734dbc7e913065fbfebc8f2f6583d",
".git/objects/af/70a8078804682c51cde7c5e27c3b66b3b116c7": "9754d0267dd4b09e41cc199263603f20",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/b0/af0577f3dfddc0c2dffc249dd9c9fbdc78c83b": "0df08613209879eb6ccdcee473753201",
".git/objects/b9/4fa91e137342e4b028dfc22d9c677c30a692ec": "a33dc9cf956975306fe6bae8b2d3b84b",
".git/objects/ef/dd5e84a0397ecada7b9cfde51db87db08766bd": "ad7d8c09a50d25e6b1fd7275b39a3dbe",
".git/objects/c4/47da8d807edbf4df0ad1793d41ece09ea68ffd": "e129d9c11c75f087b1ad7b281670425a",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cc/c8535435e8e7d22dea7410609ab9c834e59d3c": "dc066bd44ff30316ab863952bdedfbaf",
".git/objects/e6/1e8e88bdc98d7edba0ba2a372dfd7b4e5c4b3f": "cdc5a17a6724bfcd899294f948824469",
".git/objects/e6/adc4842132b9b8fa8dd10518180a555c3e70a2": "3e1cddb435938662445a7e55b4e61ab3",
".git/objects/f7/14a514d94e495095e2f1e525a341eade187c17": "ca0d4350dcdad8026382089554e0448e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/fa/0be3b38bced59d22c56131a06b502d2bece786": "ccf7a92a83a5f3eae2ac2e5f10b18e73",
".git/objects/ff/7205e3accf7d136bf285fb925e85129187c45a": "8212f214c1bf059d2b050941fc998ab2",
".git/objects/f6/23aba302a584e84c97e1dcd22930ff429caaf4": "fb3ebd9de35ecac4dfe9ef43fe01988e",
".git/objects/e7/0172a067fd15966d7a40fe245db4a9e4940c46": "de8a625595b9faadb899a31497b5b001",
".git/objects/f8/79014bde04abe02ae5785680b5954f4a31d599": "2617c06993e9a1fccc35646f264a5849",
".git/objects/f8/44efb7c3e3b9c817ab0dd1fc4f6cdcc6035efc": "31b4f9ec9bb518c57cd25f39be55197f",
".git/objects/46/e9bf7c95adb27c042d0646deb1f8a3beb8087e": "5c1a11ea89825664117b5ed3e271e2f7",
".git/objects/79/d154baf388c0671f2a7d65542a6c3f736a02b6": "f3cc2851041b6fa474c73781fd4005a3",
".git/objects/2d/ca494120595aeafcb926259b1d50b305db4ff8": "6f8c3ba6a6577bd86e94c056de85e75d",
".git/objects/2d/f7e7890b481a9ae7a70c422a2db78ffdad3d12": "8c03ed1ab6cd7000bc4dce2fff16867c",
".git/objects/2d/452383651a6ef279743a9926b90234b8b79366": "c509d556b2a9b17abfe6a4b405457ff8",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/77/ecf59d1106d8b2723abe9c0c9db956579c275d": "377d8422ca5d451c02811e2d1e2ab88e",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/48/1bcd4eca99b91939dc20466bc274fee0e00294": "1cbe8bf50e2727468c68fce93f414f6b",
".git/objects/1e/183003368fe0d725d9332637cc22eedae6bef7": "fb3bdf86a792cce278b955bd9a6490c8",
".git/objects/1e/0c3319810ad7a0312e10c3d62da6beea7f1c58": "678c14d1cf3d106f2a2cd0d8caf73a26",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/1e/ba5c6fdd5bba8859a7995fd3d435c0d102b21f": "1db80a8cb6203e65844dae1570c378ff",
".git/objects/84/3b8a86d04c4bcc87926ad18d6c3a16bd1e13c3": "79fd430b209847c96a50f8fd02f1a7a5",
".git/objects/15/6d4a109956c1e9eb1f172d4fc26f3f4a18c26f": "47855ee823ec5e091cdeabd41e2082ab",
".git/objects/12/b7b3c40b5c8dd7d90968d43bac7bc673a6c221": "c1ae18fde79c24e596087332de9a1b13",
".git/objects/12/fe9cc569a41bf794ed5830aa1cb3a2d2da4c97": "f9aa5633875771f66cbc681e139a7ea3",
".git/objects/71/b2af8bed1af953305925207479a8af3372cf7c": "77ffebcbe5dd975825459c3f99cc7e95",
".git/objects/49/a06ed119b8eaa59cb1840320764781d57bc2ed": "7e4ed45a50e56cb527cb947cac344857",
".git/objects/40/076c32af03675ec531d0d961336247abd4dbe5": "da3b8961d3638fa37d1eec0f235b6fe0",
".git/objects/2b/6392ffe8712b9c5450733320cd220d6c0f4bce": "8c5765aae9760c295ac45acfb0e04a63",
".git/objects/47/05b5b75dc2cb2095bf2fb8c2f2c9a9db3ad315": "1dbaf6c0e830937e24d9cf68a5932701",
".git/objects/13/9fb1bc7d73efd470b28eb787f128ee88d2c586": "81be80f067add0393e88dc4f491055b9",
".git/objects/14/e3f9b23f5bc8f223ebf8387d74bffbd14958df": "52ccae34bde69e21df23cc8ca6940142",
".git/objects/14/d2b375dc0c2c4aec35b3d9d4bd89d7291c52dd": "ccfdd2e5d5fbb4633b77ee36ca291938",
".git/objects/22/4b0a06b7a6413ceb6f284d7397bddb700030e6": "14cb4d0043ebea7f519be04fc867578a",
".git/objects/22/2198e5b658e52b1e8392fa85f81b5b0ad89699": "e183403d82efb1b3e5005d5a49e3526b",
".git/objects/22/a412dd5d4b138987b6a9df8f96c71c48a61f24": "02b3ed40143ab3524bb142b39d46ca6c",
".git/objects/25/b4a5859c7d703952784d375480e52636284148": "bc5d12ae0ea6670ce1049042a89d521c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80a09e2e9dcbfb3743ecfb3fa6c4d976",
".git/logs/refs/heads/main": "f903ac901ed2440bab8ed6ab828627c8",
".git/logs/refs/remotes/origin/main": "5e9208aebb6a7fc2294509816e14b743",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "589d303bc83b5675f5db97ac075e426d",
".git/refs/remotes/origin/main": "589d303bc83b5675f5db97ac075e426d",
".git/index": "e2b6c3b4d0b6710e3c857befb4e4bfc9",
".git/COMMIT_EDITMSG": "ae8e6566460bf3b6e743b33072296545",
"fonts/DMSans-Regular.ttf": "7c217bc9433889f55c38ca9d058514d3",
"fonts/DMSans-Bold.ttf": "b9cec5212f09838534e6215d1f23ed55",
"fonts/OFL.txt": "7b54e58aafd08ccbd0b01eb679b98df7",
"assets/AssetManifest.json": "5bdd15947475c870ec1b7761a19e7d92",
"assets/NOTICES": "ec1bd0b2102e97b416e7ceb1b6055397",
"assets/FontManifest.json": "525ed37092fd68b78c06d4e08030d42e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "82a6c110601f0a8ea41cd8723f9ed7fe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "8d829af8130447be281ebddc29bb3801",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "9dc4e491a2a4ecb2d2d138ca896ca7f0",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "26fd85535ad335759d2e02983eccafbc",
"assets/fonts/MaterialIcons-Regular.otf": "7dc5cdf76c91439ba100316653560bd2",
"assets/assets/locale/zh.json": "29266e5eeb461b15ac149865956a7e08",
"assets/assets/locale/tr.json": "b8df49b6016ad1cebe8b4d1fd59a7510",
"assets/assets/locale/nl.json": "01186a721268f561ab5a4d1e2a0ce53c",
"assets/assets/locale/ja.json": "49bfbe8c69fd48675e6432dd55cfe1fe",
"assets/assets/locale/de.json": "56f48436c06fc1a20ef39edacaf5b0a2",
"assets/assets/locale/ru.json": "afb0238397651e24f14531584a3e311a",
"assets/assets/locale/pt.json": "416e7035e72c091bb540e0af86bee8b2",
"assets/assets/locale/en.json": "c000b871099f95f0a42ab83aed36a3c3",
"assets/assets/locale/km.json": "d3d71ff26cc950cbc90dbf9e9e408fce",
"assets/assets/locale/fr.json": "8c09a473c1efaa9c898c73d4494a3a50",
"assets/assets/locale/el.json": "537d10f2bdb93f7fdd9836dfb726132c",
"assets/assets/locale/hi.json": "457c00dd9fbe7204d26fd0081eda6eeb",
"assets/assets/locale/ko.json": "ad689def034d9187d68dff112d56e99e",
"assets/assets/locale/he.json": "d097bd387da1d2af48c6523a8e2d93ea",
"assets/assets/locale/vi.json": "9d1de8b55e1b27c0720044407bc44cd1",
"assets/assets/locale/fa.json": "e9cc28ebf6b31bc4b02ea3fc006b19b4",
"assets/assets/locale/lo.json": "87500fe8c580dce700d8b93937a3d30f",
"assets/assets/locale/id.json": "a2d8f35505e520dc48ff32a8aee49c86",
"assets/assets/locale/da.json": "49417de550653f4e4a5b6588751120ad",
"assets/assets/locale/es.json": "8cec07e35f972d590824f91f3ba2b4dd",
"assets/assets/locale/ar.json": "504ef4614b05b3eef611fedf92d8b044",
"assets/assets/images/slider.jpeg": "98c5ef192efdf220bfef03c4270d8e07",
"assets/assets/images/services-14.png": "049d7bb19205a1c50ff6c82e96b80583",
"assets/assets/images/services-12.png": "c0435aed3ba1adc570cb5e77ecc22650",
"assets/assets/images/services-13.png": "0d778f9d6852a12775c9af195fed8ab9",
"assets/assets/images/services-9.png": "9aca219eed7a93ae7ad5d55ddb3defdf",
"assets/assets/images/services-11.png": "099a7d90b37a9b7ddd7aa720cc041acc",
"assets/assets/images/services-10.png": "e0ebaf6ac2ae83494096929c7a70f262",
"assets/assets/images/services-8.png": "eb17f69bd6454d487d9c1486394db299",
"assets/assets/images/services-5.png": "33eb407abc18a4f2b465021b16c3f21f",
"assets/assets/images/services-4.png": "67f24a01b6674a763437a27af22fd95c",
"assets/assets/images/services-6.png": "4da63272fd636b8099a69a741429979a",
"assets/assets/images/services-7.png": "1ce343b503be6486a587345586d20760",
"assets/assets/images/logo.png": "15155d1706bcb26498ff89a6cb646a27",
"assets/assets/images/services-3.png": "9c8e3e0190e7172b5fc5ad50115f3b8e",
"assets/assets/images/services-2.png": "f9be53f9bc6d790f2513e33718f42c52",
"assets/assets/images/services-1.png": "836a418ab7500fa69dfd3383a887742f",
"assets/assets/images/slide.png": "0c67107c68155bccd0cd5b25f8203f44",
"assets/assets/images/loading.png": "9bd10822103b2a5ef8d7431420e98347",
"assets/assets/fonts/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/assets/fonts/Merriweather-Bold.ttf": "9ccb885c9cf8e503d557f15e0b2cbf24",
"assets/assets/fonts/Raleway-BoldItalic.ttf": "400d6e7c7df487961a0f1426a73fff68",
"assets/assets/fonts/Roboto-Light.ttf": "88823c2015ffd5fa89d567e17297a137",
"assets/assets/fonts/Raleway-MediumItalic.ttf": "d3aded9f5da961c952a9c6c41d77f681",
"assets/assets/fonts/Merriweather-Regular.ttf": "c97a9fc29652bb4afcdac68020e5d0f7",
"assets/assets/fonts/ProximaNovaT-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/Raleway-ThinItalic.ttf": "b4fdd9b19ccaa454c97e1ba2b1364815",
"assets/assets/fonts/Raleway-ExtraLight.ttf": "d2a8929f630cba5875d97a5f34da6162",
"assets/assets/fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0",
"assets/assets/fonts/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/ProximaNova-Extrabld.otf": "b4f9eb8ce027016ab9b9860817451d07",
"assets/assets/fonts/Raleway-Medium.ttf": "bb5ae98e4ce1a64042093dc235c305ed",
"assets/assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/Raleway-SemiBold.ttf": "5a25c50b181b07279489ce5bb6a9545c",
"assets/assets/fonts/Roboto-Regular.ttf": "11eabca2251325cfc5589c9c6fb57b46",
"assets/assets/fonts/Raleway-ExtraBold.ttf": "be3bf63a30b4523ae221bd4358b13e8f",
"assets/assets/fonts/Roboto-MediumItalic.ttf": "cf23e1bb619029496260760b72aebd30",
"assets/assets/fonts/Raleway-ExtraBoldItalic.ttf": "05c7000a5498523bbd184902d124c382",
"assets/assets/fonts/OpenSans-Light.ttf": "2d0bdc8df10dee036ca3bedf6f3647c6",
"assets/assets/fonts/Raleway-Regular.ttf": "9942588a6c84f959132556d99e83ded6",
"assets/assets/fonts/Raleway-ExtraLightItalic.ttf": "c8c27816a4b4b6fdfd4a8c944bd2c8ff",
"assets/assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/Merriweather-BoldItalic.ttf": "63e1f06ea6bf31c8f3143c143e7e6c2a",
"assets/assets/fonts/OpenSans-Italic.ttf": "f6238deb7f40a7a03134c11fb63ad387",
"assets/assets/fonts/Raleway-SemiBoldItalic.ttf": "b8ea2e82df9aeaf774c081dffb3b46e8",
"assets/assets/fonts/Raleway-Light.ttf": "466d154fedd98f85c9deb363ccf859a7",
"assets/assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/OpenSans-ExtraBold.ttf": "fb7e3a294cb07a54605a8bb27f0cd528",
"assets/assets/fonts/Merriweather-BlackItalic.ttf": "2282b0c9c8dea275e854273c968b20d7",
"assets/assets/fonts/OpenSans-LightItalic.ttf": "c147d1302b974387afd38590072e7294",
"assets/assets/fonts/Raleway-Black.ttf": "46818ebd4f76c4e6fe9b030dbc74f5cf",
"assets/assets/fonts/Roboto-ThinItalic.ttf": "35a9c89aff1396595ad345e378a32aca",
"assets/assets/fonts/Raleway-BlackItalic.ttf": "956d40aa9747deb39f8b93793803bc9d",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/Roboto-BoldItalic.ttf": "5b44818d2b9eda3e23cd5edd7b49b7d5",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/OpenSans-SemiBoldItalic.ttf": "4f04fe541ca8be9b60b500e911b75fb5",
"assets/assets/fonts/Roboto-LightItalic.ttf": "a3ce4440f2abf76f4a1b14b83920138c",
"assets/assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/ProximaNova-Black.otf": "f401366193520cdf512c7ade98260e27",
"assets/assets/fonts/Raleway-LightItalic.ttf": "e2a70086178378a6165ad7b032ee1077",
"assets/assets/fonts/OpenSans-ExtraBoldItalic.ttf": "37f52104364c2eb5482fd85777bda0ac",
"assets/assets/fonts/Raleway-Thin.ttf": "5faedfece17998f456bf5b32b100b597",
"assets/assets/fonts/Roboto-Italic.ttf": "a720f17aa773e493a7ebf8b08459e66c",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Merriweather-Italic.ttf": "498bf4ee4ac9fab22ad9f814839173b2",
"assets/assets/fonts/Roboto-BlackItalic.ttf": "99682a78fa4fe61e1177b94757336bbf",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/OpenSans-BoldItalic.ttf": "3a8113737b373d5bccd6f71d91408d16",
"assets/assets/fonts/Roboto-Bold.ttf": "e07df86cef2e721115583d61d1fb68a6",
"assets/assets/fonts/Roboto-Thin.ttf": "321de678e592d0b8f44f1a82d7ca4b62",
"assets/assets/fonts/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/assets/fonts/Raleway-Italic.ttf": "b43297391b7d5d5d7b135958668c1876",
"assets/assets/fonts/Roboto-Black.ttf": "5ebb24ee1112dd9562629375c387879a",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/Raleway-Bold.ttf": "f49f3d2d9df5013c9bfaab7e3d39ee57",
"assets/assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/Merriweather-Black.ttf": "bfc959a1d3a785caff07d85f82f3e513",
"assets/assets/fonts/Merriweather-LightItalic.ttf": "4deed44b6913721447f062c9fa8caac6",
"assets/assets/data/locations.json": "ea530d7bef2472349ef69c85ef715aba",
"assets/assets/data/recent_listings.json": "20fb121d4239c68fa854dad02965759b",
"assets/assets/data/recent_listings1.json": "87dc38eae7fca944beaaf4c71c72e703",
"assets/assets/data/category.json": "c008c8d0183955bc2abe0d4a108021e6",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
