// // const {search} = require("./logic");
// describe("Test search Function", () => {
// 	test("should return array with single anime, and it's title  equals the input(animeName)", () => {
// 		const data = {
//       results: [
//         {
//           mal_id: 122,
//           image_url: "https://cdn.myanimelist.net/images/anime/9/6265.jpg?s=f29332e8aa14a913988fd734fe768ae9",
//           name: "Full Moon wo Sagashite", 
//         },
//         {
//             mal_id: 21845,
//             image_url: "https://cdn.myanimelist.net/images/anime/10/66637.jpg?s=1418ea4d408f7caccf9d4a2d8a513f4a",
//             name: "Ushinawareta Mirai wo Motomete",
//         },
//         {
//           mal_id: 2250,
//           image_url: "https://cdn.myanimelist.net/images/anime/1/2476.jpg?s=667e3c19eb14425361ffc6a0fa4e4d2f",
//           name: "Roots Search: Shokushin Buttai X",
//         }]};
// 		const actual = search("Ushinawareta Mirai wo Motomete", data) ;
// 		const expected = [{
//       mal_id: 21845,
//       image_url: "https://cdn.myanimelist.net/images/anime/10/66637.jpg?s=1418ea4d408f7caccf9d4a2d8a513f4a",
//       name: "Ushinawareta Mirai wo Motomete",
//   }];
// 		expect(actual).toEqual(expected);
//   });
//   test("if the input animeName dosen't equal any anime title from the input data, it shlould return empty array", () => {
// 		const data = {
//       results: [
//         {
//           mal_id: 122,
//           image_url: "https://cdn.myanimelist.net/images/anime/9/6265.jpg?s=f29332e8aa14a913988fd734fe768ae9",
//           name: "Full Moon wo Sagashite", 
//         },
//         {
//             mal_id: 21845,
//             image_url: "https://cdn.myanimelist.net/images/anime/10/66637.jpg?s=1418ea4d408f7caccf9d4a2d8a513f4a",
//             name: "Ushinawareta Mirai wo Motomete",
//         },
//         {
//           mal_id: 2250,
//           image_url: "https://cdn.myanimelist.net/images/anime/1/2476.jpg?s=667e3c19eb14425361ffc6a0fa4e4d2f",
//           name: "Roots Search: Shokushin Buttai X",
//         }]};
// 		const actual = search("jackob", data) ;
// 		const expected = [];
// 		expect(actual).toEqual(expected);
// 	});

// });