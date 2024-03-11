console.log("Tôi là external");

// ------- Biến (variable) ----------//
// Lưu ý 1: tên biến không được viết số nằm ở đầu tiên
// lưu ý 2: tên biến không được có khoảng cách
// lưu ý 3: tên biến viết theo kiểu camel case
// lưu ý 4: tên biến phải có ý nghĩa
// lưu ý 5: tên biến phân biệt chữ hoa và chữ thường
// lưu ý 6: tên không được đặt trùng các từ khóa đặc biệt
/** Tôi đang comment nhiều dòng
 * dòng 1
 * dòng 2
 * dòng 3
 */
var tuoiMe = 49;
var contentNumber = "Tôi là màu đỏ";
var contentnumber = "Tôi là màu cam";
console.log(contentnumber);
console.log(contentNumber);
// console.log(content);
// console.log(content);
// console.log(content);
// console.log(content);

// Kiểu dữ liệu
// Kiểu dữ liệu chuỗi
var hoTen = "Tấn Khải";
// Kiểu dữ liệu number
var diemToan = 8;
// Tấn Khải đi học được có 8đ

//cộng chuỗi
console.log(hoTen + " đi học được có " + diemToan + "đ");

//kiểu dữ liệu luận lý
//var checkphat = true
var checkPhat = false;

//Toán tử
var tienLuong = (500000 * 28 - 5 * 300000 + 1000000) / 28;
console.log(tienLuong);

var ketQuaDu = (50 * 34 + 265 - 367) % 2;
console.log(ketQuaDu);

//lưu ý về phép tăng 1 và giảm 1: Nếu như phép tăng 1 hoặc giảm 1 được ghi ở sau biến
var diemVan = 5;
var diemVanMoi = 5 + 1;
diemVan--;
console.log(diemVan);
// console.log(ketQua);
// diemVan--;
// console.log(diemVan);

var diemHoa = 2;
diemHoa = 9;
console.log(diemHoa);

var diemTrungBinh = diemHoa; // 9
// diemTrungBinh = diemTrungBinh + 9;
diemTrungBinh += 9; // diemTrungBinh = 18
// diemTrungBinh = diemTrungBinh - 5;
diemTrungBinh -= 5;
console.log(diemTrungBinh);
// diemTrungBinh = diemHoa + 9 + 7;
// var tong = 0;
// tong = tong 0 + 1; // tong = 1
// tong = tong 1 + 2; // tong =3

// var PI = 3.14;
// PI = 4.13;
const PI = 4.13;
// PI = 4.13;
const TIEN_LUONG = 400000;
console.log(TIEN_LUONG);

// Bài tập tính tiền vé xem phim
// Yêu cầu: Một rạp vé xem phim, có 2 suất chiếu là trẻ em và người lớn, với người lớn thì vé là 75000 còn trẻ em là 50000. Hãy tính toán giúp rạp vé xem nguyên tuần nay có 45 người lớn và 26 trẻ em xem phim. vậy số tiền nhận được là bao nhiêu

/** Phân tích mô hình 3 khối
 * phân tích đầu vào:
 * - Có 2 loại suất chiếu và giá tiền cho mỗi loại suất chiếu là 75k và 50k
 * - Tuần này có 45 người lớn và 26 trẻ em coi phim
 *
 * Các bước xử lý dữ liệu để ra kết quả:
 * - Tạo một biến chúa giá trị tổng tiền vé
 * - Tính xem với suất chiếu người lớn
 *
 * Phân tích đầu ra:
 * - Tổng tiền vé bán được trong tuần
 *
 */

var tongTienVe = 0;
//tongTienVe = tongTienVe + 75000 * 45;
tongTienVe += 75000 * 45;
tongTienVe += 50000 * 26;
console.log(tongTienVe);

var edge1;
var edge2;
var edge3;

edge1 = 3;
edge2 = 4;
edge3 = Math.sqrt(edge1 * edge1 + edge2 * edge2);
console.log(edge3);

var n;
var unit;
var ten;
var hundred;
var sum;
n = 123;
hundred = Math.floor(n / 100);
ten = Math.floor((n % 100) / 10);
unit = n % 10;
sum = hundred + ten + unit;
console.log(sum);

var tenPhim;
var giaVeNguoiLon;
var giaVeTreEm;
var soVeNguoiLon;
var soVeTreEm;
var phanTram;
var tongDoanhThu;
var tienTuThien;
var tienConLai;
var tongVe;

tenPhim = "Zero to Hero at CyberSoft";
giaVeNguoiLon = 3;
giaVeTreEm = 2;
soVeNguoiLon = 1000;
soVeTreEm = 1650;
phanTram = 10 / 100;
tongVe = giaVeNguoiLon + giaVeTreEm;
tongDoanhThu = soVeNguoiLon * giaVeNguoiLon + soVeTreEm * giaVeTreEm;
tienTuThien = tongDoanhThu * phanTram;
tienConLai = tongDoanhThu - tienTuThien;
tongVe = soVeNguoiLon + soVeTreEm;
console.log("*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_");
console.log("Ten phim:..................................." + tenPhim);
console.log("So ve da ban:..............................." + tongVe);
console.log("Doanh thu:.................................." + tongDoanhThu);
console.log("Trich phan tram tu thien:..................." + 10 + "%");
console.log("Tong tien trich tu thien:..................." + tienTuThien);
console.log("Tong thu duoc sau khi tru:.................." + tienConLai);

function tinhLuong(soNgayLam) {
  var luongMotNgay = 100000;
  var tongLuong = soNgayLam * luongMotNgay;
  return tongLuong;
}

var luongNhanVien = tinhLuong(10);
console.log("Tổng lương nhân viên là: " + luongNhanVien + " VND");

var n1 = 2.3;
var n2 = 4.3;
var n3 = 5.1;
var n4 = 8.7;
var n5 = 6.8;
var giaTriTrungBinh = (n1 + n2 + n3 + n4 + n5) / 5;

console.log(giaTriTrungBinh);

function quyDoi(soDoLa) {
  var giaUSD = 23500;
  var soVND = giaUSD * soDoLa;
  return soVND;
}

var tongSoTienVND = quyDoi(100);
console.log("Số tiền sau khi đổi là: " + tongSoTienVND + " VNĐ");

var chieuDai = 4;
var chieuRong = 8;
var dienTich;
var chuVi;

dienTich = chieuDai * chieuRong;
chuVi = (chieuDai + chieuRong) * 2;

console.log(dienTich);
console.log(chuVi);

// var so = 43;
// var soHangChuc = Math.floor(so / 10);
// var soDonVi = so % 10;
// var tongHaiKySo = soHangChuc + soDonVi;
// console.log(tongHaiKySo);

var so = 63;
var soHangChuc = Math.floor(so / 10);
var soDonVi = so % 10;
var tongHaiKySo = soHangChuc + soDonVi;
console.log(tongHaiKySo);
