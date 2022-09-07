# type coercion 
  type coercion : chuyển đổi dữ liệu (ép kiểu)
  + - * / 
  - * / : phép tính ==> number 
  đặc biệt : (phép +) "nối chuỗi" ==> dạng string 
# toán tử so sánh cơ bản 
  > >= < <= : trả về true hoặc fales
# toán tử logic cơ bản && || ! 
  && : và , || :hoặc , ! :khác
  boolean && :
  true && false  ==> false
  false && true  ==> false
  false && false ==> false
  true && true   ==> true
  boolean || :
  true || false  ==> true
  false || true  ==> true 
  true || true   ==> true 
  false || false ==> false
  boolean ! : 
  !true  ==> false
  !false ==> true
# toán tử == , === ,!==
  ==  : loose equality ==> so sánh theo giá trị có convert gtri : number => string 
  === : strick equality ==> so sánh chuỗi không convert gtri - check đúng giá trị (khuyến khích dùng ===)
  !== : so sánh khác 