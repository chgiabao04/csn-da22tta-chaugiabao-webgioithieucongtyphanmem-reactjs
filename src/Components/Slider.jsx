import React, { useState, useRef, useEffect } from "react"; // Import useRef, usesState
import SlickSlider from "react-slick";
import logobanner from "../assets/logo1-banner.png";
import logobanner2 from "../assets/logo2-banner.png";
import logobanner3 from "../assets/logo3-banner.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Slider.css'


function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0); // Trạng thái slide hiện tại
  const sliderRef = useRef(null); // Tạo ref cho slider

  const settings = {
    dots: false, // Tắt chấm tròn
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next), // Cập nhật slide hiện tại
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3); //  có 3 slide
      sliderRef.current.slickNext(); // Chuyển đến slide tiếp theo
    }, 4000); // Chuyển slide mỗi 4 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);


  return (
    <div className="slider-container">
      <SlickSlider ref={sliderRef} {...settings}> {/* Sửa: Thêm ref cho SlickSlider */}
        {/* Banner thứ 1 */}
        <div className="banner">
          <img src={logobanner} alt="NVIDIA Ethernet Networking" />
          <div className="banner-content">
            <p>Mạng lưới</p>
            <h1><strong>NVIDIA Ethernet Networking <br /> tăng tốc siêu máy tính xAI</strong></h1>
            <p>Cụm siêu máy tính Colossus của xAI đạt được quy mô lớn bằng <br /> cách sử dụng nền tảng mạng Ethernet NVIDIA Spectrum-X <br /> để kết nối 100.000 GPU NVIDIA Hopper.</p>
          </div>
        </div>

        {/* Banner thứ 2 */}
        <div className="banner-2">
          <img src={logobanner2} alt="NVIDIA Data Center" />
          <div className="banner-2-content">
            <p>Trung tâm dữ liệu</p>
            <h1><strong>Các nhà lãnh đạo công nghệ Ấn Độ <br /> xây dựng nhà máy AI</strong></h1>
            <p>Được công bố tại Hội nghị thượng đỉnh AI Ấn Độ <br /> các nhà cung cấp cơ sở hạ tầng đám mây <br /> và nhà sản xuất máy chủ hàng đầu <br /> đang tăng cường năng lực trung tâm dữ liệu với hàng nghìn <br /> GPU NVIDIA Hopper™.</p>
          </div>
        </div>

        {/* Banner thứ 3 */}
        <div className="banner-3">
          <img src={logobanner3} alt="NVIDIA Data Center" />
          <div className="banner-3-content">
            <p>Trí tuệ nhân tạo</p>
            <h1><strong>Giới thiệu Gefion, Siêu máy tính <br /> AI có chủ quyền hàng đầu của Đan Mạch</strong></h1>
            <p>Tổng giám đốc điều hành Jensen Huang cùng vua Đan Mạch <br /> ra mắt siêu máy tính AI đầu tiên của nước này - sử dụng <br /> NVIDIA DGX SuperPOD - nhằm mục đích giải quyết <br /> các thách thức khoa học có tác động xã hội.</p>
          </div>
        </div>
      </SlickSlider>

      {/* Hiển thị dấu gạch ngang */}
      <div className="dash-indicators">
        {[0, 1, 2].map((index) => (
          <span
            key={index}
            className={`dash ${currentSlide === index ? 'active' : ''}`}
            onClick={() => {
              setCurrentSlide(index); // Cập nhật slide hiện tại
              sliderRef.current.slickGoTo(index); // Sửa: Chuyển đến slide tương ứng bằng cách sử dụng ref
            }}
          >
          </span>
        ))}
      </div>
    </div>
  );
}

export default Slider;