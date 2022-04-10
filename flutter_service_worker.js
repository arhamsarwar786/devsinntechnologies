'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/firebase.png": "2560929cd1beb777fbfa64805bb6d5b4",
"assets/assets/team.png": "a30acffb66dbd229d2659d66bb75d66a",
"assets/assets/Hive.png": "8c1411bd485cfdb5a5a388edba0a6eb1",
"assets/assets/aboutusbg.png": "b84db954b4fead721c46625355e1fc6f",
"assets/assets/CLOUD%2520COMPUTING.png": "fbfe7893112c2d45803b330edc7999ef",
"assets/assets/setting.png": "11ea863c4c64de86ae43aaad46622e92",
"assets/assets/3.png": "9d648fd6f78e1dd279001786c94cb574",
"assets/assets/Relaible-air-ducts-logo.png": "fac1315eed4443cd5c5eb7cb44c40c4d",
"assets/assets/5s.png": "829f2dbcd15727c355b40301ddf2a06f",
"assets/assets/7s.png": "8959f320f481570bebe2e351e7c728a9",
"assets/assets/mobappservices.png": "5d0042f1179b3c11d18b93ae0b9e7fba",
"assets/assets/cloud-service.png": "94254501a838e1d5270c9c7c7f4c5d64",
"assets/assets/machine-learning.png": "3e89055047b4f5a6a08916b6e25a03a0",
"assets/assets/sixth.png": "3b7c1de2ae70211c80a8cddafb5545cf",
"assets/assets/press.png": "84b25283680a6f395a799d5bd3325c75",
"assets/assets/eh.png": "9c186be6d8742938a26f81e3b29affb5",
"assets/assets/working.jpg": "456a49c73918be0708194ae5e5b37b11",
"assets/assets/ratingbg.png": "39568ce82cfb60cb021f42aca450af1d",
"assets/assets/CORPORATE%2520IT.png": "feb79ac1f5937fb8ac0deb757ed4af67",
"assets/assets/bg-main2.png": "9162d7a2d1009c74d48e9f8bf287fe30",
"assets/assets/backGround.jpg": "f46aa65e1b82be978cf7cdb76d66c5fc",
"assets/assets/Dedicated%2520Server.png": "b2bc458164269a41ef759f69c3322fa1",
"assets/assets/foundation.png": "61141689eae1b189dca0d331cdb04b28",
"assets/assets/gmail-logo.png": "fb187553135363bb5dc7cc9432cc8592",
"assets/assets/packagessecondimg.png": "d2cf227df24f260d45404447aa6f8014",
"assets/assets/search.jpg": "1744292a0565505d02d110939d36c7e4",
"assets/assets/Flutter-bootcamp.png": "4cf9cebe25f2702c2bb63c264c97285a",
"assets/assets/Cloud.jpg": "f402983e5e9d4ffe4cb4cd37da767a3d",
"assets/assets/managed%2520ssl%2520service.png": "3edde09cfc9945db473c242b9bb8b5ed",
"assets/assets/email%2520marketing.png": "79de63da05fe031bf7ff5bc0acfacff7",
"assets/assets/ur%2520market%2520Value%2520-%2520Kirk-logo.png": "44e90451186282bf277a9b27d5aa6ca7",
"assets/assets/social.jpg": "8bc84a1aae0a1f2894e7a8f6ecee041c",
"assets/assets/prezedu.png": "dd5c02e23b80e1f1c769fe4e64f59105",
"assets/assets/LOGO-2.png": "39dee4188a66de319e24243fbbaff3bc",
"assets/assets/headerimage.webp": "8a3a53243dc795288b210f5f5d5d18ca",
"assets/assets/corporate%2520-%2520Copy.jpg": "3f88b8f7a84882e79e520ec24e931c9b",
"assets/assets/stripe.png": "1c9702ac59bfb8ea9f59d303325d0096",
"assets/assets/cloud-computing.png": "802459ae89612ed7c790c83819058005",
"assets/assets/Reactive.png": "2b66fdf631f68869acb2ffb45e808e22",
"assets/assets/meeting.png": "c9d5524579e4b4670cdf423446fd2c1f",
"assets/assets/th.png": "8b1041872ce3fda4c993b005979120bf",
"assets/assets/coporate%2520traning.png": "02870170ae2eee89ea637eac5bab3730",
"assets/assets/why-icon-3.png": "d8ba22c39233c37cdaa795840f5d0949",
"assets/assets/ssl.png": "dbf4f07248541e6289ff1ccb1e08b25b",
"assets/assets/Dart.png": "02517865f1c6d94b3002fbf3dda25b92",
"assets/assets/First.png": "ca9b58d6868d73668089bc6ab0345a9b",
"assets/assets/af.png": "d98c2f77a8f089946bf80e8a6e01c72d",
"assets/assets/tickbox.png": "203af42b470dac1629f9ec07557f9524",
"assets/assets/LOGO-COLDWELL.png": "303cb4cb6d0e78166fab6f2049c53baa",
"assets/assets/cloud%2520-%2520Copy.png": "fba94f10acb8655e388ba074393fc0a5",
"assets/assets/machine.png": "3e75c109163a5e974ec00382aaec27ae",
"assets/assets/training.jpg": "5d5b1dfa8def46cb57155a79687d8b1a",
"assets/assets/completedProject.png": "d6616006d7a274f5f48b70daac6a7139",
"assets/assets/c%2520panel.png": "024c7d6c19d55ebdbc21218dd9f8c4ed",
"assets/assets/3s.png": "f7ae7edb4bc7f627c7797a38e90c7906",
"assets/assets/Apps.png": "2a9e11e94c894932493bafc053caeb0c",
"assets/assets/aboutUs.gif": "50283a42e674290f3b717f8b2fb5d18c",
"assets/assets/8s.png": "139f442e27a173e3f79b44b23fe11c9b",
"assets/assets/design.png": "5f28dd8ef1a7f8009c753637e551ba70",
"assets/assets/ec2.png": "7b375a482ccee0cd64c4f2480b2d060d",
"assets/assets/bg.png": "74f4a622673322ee892d7da63f1a592d",
"assets/assets/detination-camp.png": "35337358e634e8cfb2fa6fe5bf403c2f",
"assets/assets/email1.png": "6cca941755b0dadbca5807dd4e1c111f",
"assets/assets/third.png": "b010634c0932d82b010bc91e6fdd304c",
"assets/assets/C&Y%2520MOVING%2520SERVICE%2520LOGO.png": "07aab196745b3c800fbe0883801880e3",
"assets/assets/norsu.png": "2009c2ae845eb8fdc87e6301b4923295",
"assets/assets/searchengine.png": "9a806594e4063bcc15b91393f6e1f6d7",
"assets/assets/gc.png": "291d6558e5ceb5ef3c6b6b77571333b8",
"assets/assets/growbussinsbg.png": "0d6c5a77522d4b494076fb3213b053c5",
"assets/assets/mobapp2.png": "de1775b42e7e4fc881c89e8c7772525e",
"assets/assets/Networking.png": "7e0760baf38780fd0f63706edfe748c5",
"assets/assets/fiveth.png": "de3c7171fb7b48b5ae746c9145e46cdf",
"assets/assets/paypal.png": "022ee7916dec8e0a75d8581d22472875",
"assets/assets/prezedu-logo.png": "dd5c02e23b80e1f1c769fe4e64f59105",
"assets/assets/mobileservices.png": "34ada551120fa2a17c3046a6ac104848",
"assets/assets/loading%2520balancing.png": "6dc5bf86c3d49ea6ae78e5ccb0da6138",
"assets/assets/domain-registration.png": "74e64974f79f070a1a421f4347d28d80",
"assets/assets/bg-main.jpg": "8035ac7390ff989b600aece0b2334bde",
"assets/assets/ContUs.jpg": "ed459e9ee72bca6405c9f3d5a370425b",
"assets/assets/mobapp3.png": "1e267f0e212a422a61c660f5d1a72f5c",
"assets/assets/bulk%2520transfer.png": "f9ec24bbabc09e8c58239795bfa1e4ac",
"assets/assets/wp.png": "15d51f7f473d9342860d8cc6a8da0b74",
"assets/assets/www.png": "aa93f2ec97fe7eba3e69202a3a4f104e",
"assets/assets/2s.png": "94254501a838e1d5270c9c7c7f4c5d64",
"assets/assets/contact.jpg": "76c08bb9afb075bd6a0efbc07f3f0c98",
"assets/assets/cloud.png": "fba94f10acb8655e388ba074393fc0a5",
"assets/assets/topnotch.jpg": "9dd89411ee25647092c71d196b18242b",
"assets/assets/shopify1.png": "0b8594f58977fb6be34ffd6174e66db5",
"assets/assets/lowercloud.png": "45c3958aeebe055cb7034c6e6246eb2e",
"assets/assets/aqua-free-logo.png": "d98c2f77a8f089946bf80e8a6e01c72d",
"assets/assets/microsoft%2520365.png": "736459b98f9c2e50f27acd94f9517202",
"assets/assets/dr.png": "f2d078bc34953ce827eeb621384cea94",
"assets/assets/team-management.png": "582ef5e0db8982d3b5a0621c6448b36c",
"assets/assets/SHARIF-JEWELER-LOGO.png": "65e0ee96672717a0b5cbc84e8ccd504c",
"assets/assets/location1.png": "396b4ce2484b5e362c5173844dea1ab9",
"assets/assets/withUsbg.png": "a093e4c6ff81b33425ce8f12fbdcc7d1",
"assets/assets/1s.png": "96a240cc1f647c925fc43def9b8a7e92",
"assets/assets/whatWeDo.png": "a472e2882d43db454c985d254d628fff",
"assets/assets/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/officeworldwide.png": "2ebf62aac8e957f125ea1972d83045e3",
"assets/assets/cloud-computings.png": "7be505a03170f2f0dfab02c1842b52f9",
"assets/assets/greenchili-logo_compressed.png": "291d6558e5ceb5ef3c6b6b77571333b8",
"assets/assets/second.png": "97e7fd3d18919c01f208c377f8978fd5",
"assets/assets/clouds.png": "fba94f10acb8655e388ba074393fc0a5",
"assets/assets/socialmedia.png": "1fdedc618875ec7609bc6c9375011e07",
"assets/assets/aurora.png": "e69c5744b2f9d41a80c6ad670e3f60be",
"assets/assets/aboutUs.jpg": "a19f622b8656acb052fac9430b0b3b65",
"assets/assets/iam.png": "5004138f8a7c0d07f0c9de0c28036dcf",
"assets/assets/aws-lambda-logo.png": "0e39d2815746d0c461fb06c880b93fd1",
"assets/assets/essential-home-improvement-logo.png": "0c68f87301b2dceb49c020dacc05d580",
"assets/assets/State.png": "53b624643b0c61020164c40e806ec332",
"assets/assets/MobileAppServices.jpg": "536382e897365b6f25fc05b387b8da29",
"assets/assets/TOTAL-MOBILE-SERVICES-LOGO.png": "3195d5932b3f60856d88d82dde108b46",
"assets/assets/why-icon-5.png": "8d0edad1d70cfa889e5038565cd409a4",
"assets/assets/why-icon-4.png": "a44a12d6a62ea24b37e1317d95d62de6",
"assets/assets/graphic.png": "b6dcb3b9504fda00cdf7c3e700a0b0a4",
"assets/assets/RDS.png": "940b01d6637ce769761d7cc70b46ed85",
"assets/assets/growimage.png": "16917a690016636820095eedf4565b2f",
"assets/assets/website%2520security.png": "79186cf75dd43e436c2dc8c973f6f1fc",
"assets/assets/ai.jpg": "77ab023ad97f5624639695dead247d5b",
"assets/assets/seo.png": "fa16f767ab959478c7dcf44d8285887d",
"assets/assets/vps%2520hosting.png": "017e2a81cffcc7e66276333540ba57ce",
"assets/assets/aws_logo.png": "dc29014f41ce3b035407cfc531b7819d",
"assets/assets/shopping%2520cart.png": "996dca7489b2efeaecb433ae13551353",
"assets/assets/image1.png": "4e7c575b3769aa6d319a778edf8d5b55",
"assets/assets/larrez-logo2.png": "f10cdf94e11a4446003a8add7df93085",
"assets/assets/positiveReviews.png": "9d8a7a99006bbfc0b11533ea673f05b2",
"assets/assets/why-icon-2.png": "c9fd3c89c60d1d2a1f89a898495e9a70",
"assets/assets/cloud_data.png": "6f742ddec47823f36595b671c04a0081",
"assets/assets/aws-api-gateway.png": "a8f5af3e9818b89e3460d79bf3c09e39",
"assets/assets/designing.png": "1972fb42d9d92e52143c86a0745f3b40",
"assets/assets/6s.png": "62b72ded28e3a8419ade60fb72c9cad7",
"assets/assets/1.png": "d74af5f78e3549d457528f8fa3b591a8",
"assets/assets/circular-line.png": "ae3b95255efdcbaaecfc2b1944062724",
"assets/assets/domainreg.png": "9e6c7ba15e368e118eb95afebaf7994f",
"assets/assets/why-icon-6.png": "75b535b1a7a15efc1d8d398da56c140a",
"assets/assets/awsbg.png": "960e1a6d6f5ca881bbfee61382ffa794",
"assets/assets/cy.png": "07aab196745b3c800fbe0883801880e3",
"assets/assets/wordpress.png": "9226871637dd121e61dabdcb7fa5430d",
"assets/assets/map.jpeg": "f1cb76ac13467cbac7d83ad091710f31",
"assets/assets/plesk.png": "a77c64069202e49c5db765c841c0dd7c",
"assets/assets/fourth.png": "da46c4550aac00ac217bdec188f7f26a",
"assets/assets/detination%2520bootcamp.png": "896b7effc01fc9106583dab2de19f238",
"assets/assets/graphic-desiging.jpg": "10b51a432486f5d25b1088e998666b6e",
"assets/assets/tick.png": "fd3bde6ba2d10e5395ad7ed2fdf76231",
"assets/assets/smm.jpg": "e0ae8aacda4d88a6d8cb6ba9333ddd72",
"assets/assets/2.png": "63d4538158c833e069bb8676f92eaa92",
"assets/assets/meeting2.png": "bb9de0da9b0a78cca3aec1ae3d6088b3",
"assets/assets/domain%2520backorder.png": "06e03e635ebdb7316506239ff7f7b43b",
"assets/assets/social-media-marketing.png": "c44549a80eb374430910432bac98c201",
"assets/assets/nurse.png": "b0185a189e4b1084f93cb32ec4a222b2",
"assets/assets/corporate-it.png": "ccb741863f6633e35b2c8a03d6faf0d7",
"assets/assets/learning.png": "f31bd5f309eb77e1fb56ec3d467678fc",
"assets/assets/larrez-logo1.png": "972de3ad87718e38441cbf94cb8d665b",
"assets/assets/why-icon-1.png": "b48739cf60213a66c98ad84902cf7478",
"assets/assets/pin.png": "95aefb3451064b8bd208a369317179c2",
"assets/assets/london.png": "5a3f507e7ae20fe8998979054b084373",
"assets/assets/nasa.jpg": "fb77e0b1f5ce9f6f7aed72893cf10222",
"assets/assets/UI-Basics.png": "119fa0900bbc06fddd8ed92ae5f8c060",
"assets/assets/dd.png": "cb8dc5e79bf0510062cf5ab6436abb11",
"assets/assets/phone1.png": "385de81a972cff830478f63cb5ce0659",
"assets/assets/mobile%2520app%2520development.png": "96a240cc1f647c925fc43def9b8a7e92",
"assets/assets/verified.png": "38e8a9e5dbee4afb504329a5f9bf1e98",
"assets/assets/cloud%2520service.png": "2f2c02ec403273ee4db587d6c880f490",
"assets/assets/bulk.png": "d342f34b64a6570cae179cdd1125c2b6",
"assets/assets/domain%2520transfer.png": "14b80f00a71ddb38bdf35dc06d5b5959",
"assets/assets/shop.png": "9533117644aa68bd1a20e79a5227c583",
"assets/assets/4s.png": "42f22bee4d0182ebc377caa360918599",
"assets/assets/shopify.png": "6b09cd2b4b9df1be1bfbcd4a5d06b1d8",
"assets/assets/website%2520backup.png": "7bdd45a6a16fc78e6f493994b2258e92",
"assets/assets/4.png": "0df6dc2c5dc6e773769aadb6444cda1b",
"assets/assets/NORSU-LOGO.png": "2009c2ae845eb8fdc87e6301b4923295",
"assets/assets/mobapp1.png": "a636c1bc66ae7f46492e530c99cf6996",
"assets/assets/CloudServices.jpg": "6a00bc11295a158b28ed65d907be1700",
"assets/assets/Animations.png": "6e8f447f63ba522b5cd40684054ceb70",
"assets/assets/whyUsbg.png": "01cc39274414a721362971b87b374124",
"assets/assets/fb.png": "b4d949db85fface39a4383b0c9b3a399",
"assets/assets/DesktopApp.jpg": "33bd0bdff5cb1b184c6def34b5df3292",
"assets/assets/linkedin.png": "30c453b7f5fbdb09ea0cb42a5dc7a6e5",
"assets/assets/cloudformation.png": "b4ba1ab9ec5b98636ec087aadc09874c",
"assets/assets/london-maintinance-logo.png": "5a3f507e7ae20fe8998979054b084373",
"assets/assets/top-notch-logo.jpg": "9dd89411ee25647092c71d196b18242b",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/sharee.png": "cade0c38710a30a3a0224c198edc7d4c",
"assets/assets/totalmobile.png": "fb7e429a91b5e2ddbee975f8433a326b",
"assets/assets/Business.png": "08bb463dc9a5ea25100e3ddbe57c0867",
"assets/assets/space.jpg": "3eb7e4c3bf3449b7bddc95f1f9811f00",
"assets/assets/machinelearning.jpg": "da75cd0c826bc319050f47a466644663",
"assets/assets/shop.jpg": "52b756cf743682a4099418c7f89d5a7f",
"assets/assets/training.png": "d854c4c7e4cb6e8f0e352d10bc6315c6",
"assets/assets/corporatetraining.png": "7326e36cf044c46a39bb299d11f8b902",
"assets/assets/reliable.png": "fac1315eed4443cd5c5eb7cb44c40c4d",
"assets/assets/Quantun-ShefNatasha-Log.png": "61414dbb85759787073455e85f1e8fd4",
"assets/assets/correct.png": "36f1b150bac99f022bf9e81ca347d995",
"assets/assets/sharee-logo.png": "0b0772ae79eca1f640b91441ac263fad",
"assets/assets/dynamoDB.png": "70c60165d7b00f3b90f1e325c63f4ea5",
"assets/assets/google-logo.png": "0403f5cad2e4b80aa6b072e6e23b1fbb",
"assets/assets/word.png": "29f7a9c832502fc4c54c5c1918692fa7",
"assets/assets/f360foundation-new-1.png": "7049db1825b65bcf104011c26e2fbc9f",
"assets/assets/app-development.png": "0a2ef076ae08c267feec4240b5af795e",
"assets/assets/image2.png": "a027d1dd30b1a6f96562e0d2b116f028",
"assets/assets/ai.png": "99d74d419c07372d21d283c25170bf9d",
"assets/assets/s3.png": "74210fb97fabdb15d7417bf111b28f22",
"assets/assets/phone.png": "ad11ca164b10b3de4f976b2bf76b51af",
"assets/assets/Amazon.png": "a7e580cb3bd89c20500fce34a3b63e56",
"assets/assets/Jae%2520Barber-logo.png": "2758cbf4de89857387d0e4b03d76de6a",
"assets/assets/img.png": "0aea714d586c3842ceceea061ca7a19e",
"assets/assets/corporate.jpg": "3f88b8f7a84882e79e520ec24e931c9b",
"assets/assets/DOO%2520DUTY-LOGO.png": "cb8dc5e79bf0510062cf5ab6436abb11",
"assets/assets/seo.jpg": "9f24efe53d67b75af7124f6bb6033bfc",
"assets/images/bg.jpg": "c25406b80291f3d21774152a2d90b040",
"assets/images/discovery.gif": "8e35f9aa054b5f5b8c5058f7406c748e",
"assets/images/cloud-computing.png": "0216c9346afa9a20946d1a806584a33e",
"assets/images/why-icon-3.png": "1296249f39aef050f188ea8dc4e61723",
"assets/images/email.png": "fc8954f2c9f64bed7a655ea4364382c1",
"assets/images/logo.png": "39dee4188a66de319e24243fbbaff3bc",
"assets/images/growbussin.png": "60551269526d60447c0737a40091e609",
"assets/images/location.png": "d0bd24420429267b8aaf85e5e85b0d1d",
"assets/images/cooperate-IT.png": "3d5cb2d93996ab1250f96d6b25fb3022",
"assets/images/Flutter-logo.png": "70b4364a4b9dfa6d31c154b272133adc",
"assets/images/cloud-comp.png": "e6e4298ca8f4f24fc8e42e40d79d594c",
"assets/images/why-icon-5.png": "4a32ee34735208a38446bd7611297c64",
"assets/images/why-icon-4.png": "5036861dc52ef8d1c0ea58fde7dcdd8a",
"assets/images/aws_logo.png": "42b729d4ac7ca1b1f0968a29f6465f99",
"assets/images/why-icon-2.png": "e6819009cfaf5048d956de72f3a60a96",
"assets/images/why-icon-6.png": "114803fa00594a09a73a49e440c573e3",
"assets/images/product-design.png": "aa012972a8d4027b90db29da75fb4e0a",
"assets/images/why-icon-1.png": "0d0f71c2bb42c5569f811253038740c1",
"assets/images/website.png": "e783963fad46add136c8eeebb4f98127",
"assets/images/dasdsadsad.png": "732f3a06df8cc5fb3d56d9c7a195220e",
"assets/images/news-background.png": "74acb833c930fc7173f5ac067db75661",
"assets/images/phone.png": "01b86b237286b0b029ea04a1bccae0e1",
"assets/FontManifest.json": "6a84e6c28a318c1ef29352d8cf66d39c",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/AssetManifest.json": "663dbc1344ba0ab76897cf3183c43dbf",
"assets/NOTICES": "83ade549fa807e8a74fb7a526e163b8a",
"index.html": "b3dcab2ea6cfe7f89a0e289b2846cd48",
"/": "b3dcab2ea6cfe7f89a0e289b2846cd48",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"logo.png": "39dee4188a66de319e24243fbbaff3bc",
"main.dart.js": "6acf1c2243052b5d4106e6a1508f4833",
"favicon.png": "85ab645ac73ad632a2f75195d9ced33f",
"manifest.json": "ffe15dad9ff41e40f220a1229dc210ac",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"style.css": "3dca1a575b606e446a017d4536adc006",
"version.json": "7ba99cab316e249f9171ed033469a111"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
