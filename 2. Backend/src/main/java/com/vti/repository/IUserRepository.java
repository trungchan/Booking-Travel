package com.vti.repository;

import com.vti.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IUserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserName( String userName);
//     Nếu có User tương ứng với userName, thì Optional chứa giá trị User. Nếu không có User, thì Optional sẽ không chứa gì cả (rỗng).
//     Điều này giúp bạn kiểm tra và xử lý các trường hợp trả về không tìm thấy User một cách an toàn hơn.
}
