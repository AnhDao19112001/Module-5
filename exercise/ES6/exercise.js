let courses = [
    {
        id: 1,
        title: "ReactJS Tutorial",
        rating: 4.2,
    },
    {
        id: 2,
        title: "Angular Tutorial",
        rating: 2.5,
    },
    {
        id: 3,
        title: "VueJS Tutorial",
        rating: 3.8,
    },
    {
        id: 4,
        title: "Java Tutorial",
        rating: 4,
    },
    {
        id: 5,
        title: "JavaScript Tutorial",
        rating: 3.5,
    },
];

let addedCourses = [
    {
        id: 6,
        title: "PHP Tutorial",
        rating: 3,
    },
    {
        id: 7,
        title: "C# Tutorial",
        rating: 2,
    },
    {
        id: 8,
        title: "Docker Tutorial",
        rating: 3.8,
    }
]

// request 1: Sử dụng cú pháp ES6 để xuất ra màn hình danh sách các bài đăng có rating >= 4.
const resultFilter = courses.filter((ratingLog) => ratingLog.rating >= 4 );
    // return ratingLog.rating >= 4
console.log(resultFilter);

// request 2: sử dụng cú pháp ES6 để xuất ra màn hình danh sách caác bài đăng có rating < 4
// với yêu cầu giá trị các phần tử của mảng mới có định dạng: <id>-<title>-<rating>
const resul = courses.filter((element) => element.rating < 4).map((element1) => (element1.id + "-" + element1.title +"-" + element1.rating));
console.log(resul);

// request 3: sử dụng cú pháp ES6 đã học viết hàm trả về 1 mảng gộp 2 mảng courses và addedCourese.
const newArr = [...courses,...addedCourses]
console.log(newArr);