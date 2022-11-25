import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bt02',
  templateUrl: './bt02.component.html',
  styleUrls: ['./bt02.component.css']
})
export class Bt02Component implements OnInit {
  public listNews: any[] = [
    { id: 'headingOne', title: 'Lịch trực tiếp World Cup 2022 ngày 24-11: Bồ Đào Nha gặp Ghana, Brazil đụng độ Serbia', content: 'TTO - Thụy Sĩ đụng độ Cameroon, Uruguay chạm trán Hàn Quốc, Bồ Đào Nha gặp Ghana, và Brazil đọ sức Serbia sẽ là các trận cầu không thể bỏ lỡ ở lượt trận vòng bảng World Cup 2022 ngày 24-11.', target: '#collapseOne', control: 'collapseOne' },
    { id: 'headingTwo', title: 'Ronaldo lập ba kỷ lục ở trận ra quân World Cup 2022 - World Cup 2022', content: 'Kể từ năm 2004 đến nay, Cristiano Ronaldo đã góp mặt ở 10 giải đấu lớn liên tiếp gồm EURO 2004, 2008, 2012, 2016, 2020 cùng World Cup 2006, 2010, 2014, 2018 và 2022. Đây là thành tích không cầu thủ nào tại lục địa già có thể chạm đến. Phút 65, Ronaldo kiếm được quả phạt đền và thực hiện thành công. Khoảnh khắc trái bóng làm tung mành lưới Ghana cũng là lúc CR7 đi vào lịch sử với tư cách cầu thủ đầu tiên ghi bàn ở 5 kỳ World Cup khác nhau, vượt qua thành tích của Lionel Messi, Pele, Miroslav Klose (4 kỳ World Cup).', target: '#collapseTwo', control: 'collapseTwo' },
    {
      id: 'headingThree', title: 'Việt Nam sẽ quảng bá vũ khí tự sản xuất tại triển lãm quốc phòng 2022', content: 'Quy mô triển lãm có tổng diện tích hơn 50.000 m2 với diện tích trưng bày trong nhà và ngoài trời hơn 20.000 m2. Đến nay, đã có hơn 170 đơn vị, doanh nghiệp trong và ngoài nước đến từ 30 quốc gia trong khu vực ASEAN, châu Á, châu Âu, châu Mỹ đăng ký có gian hàng trưng bày tại triển lãm.', target: '#collapseThree', control: 'collapseThree'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
