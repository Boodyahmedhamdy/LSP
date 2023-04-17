-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3388
-- Generation Time: Apr 17, 2023 at 02:43 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test_lsp_db`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_books` ()   BEGIN
DECLARE i INT DEFAULT 1;
WHILE i <= 100 DO
INSERT INTO books (id, name, price, author_name)
VALUES (i, CONCAT('Book', i), FLOOR(RAND() * 100) + 1, CONCAT('Author', FLOOR(RAND() * 10) + 1));
SET i = i + 1;
END WHILE;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_passwords` ()   BEGIN
  DECLARE i INT DEFAULT 1;
  DECLARE the_password VARCHAR(50);

  WHILE i < 100 DO
    SET the_password = CONCAT('password', FLOOR(RAND() * 1000000));
    UPDATE users SET password = the_password WHERE users.id = i;
    SET i = i + 1;
  END WHILE;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insert_users` ()   BEGIN
DECLARE i INT DEFAULT 1;
WHILE i <= 100 DO
INSERT INTO users (id, name, email, role_id)
VALUES (i, CONCAT('User', i), CONCAT('user', i, '@example.com'), FLOOR(RAND() * 3) + 1);
SET i = i + 1;
END WHILE;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `author_name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `price`, `author_name`) VALUES
(1, 'Book1', 85, 'Author5'),
(2, 'Book2', 60, 'Author8'),
(3, 'Book3', 72, 'Author5'),
(4, 'Book4', 24, 'Author8'),
(5, 'Book5', 9, 'Author2'),
(6, 'Book6', 47, 'Author10'),
(7, 'Book7', 15, 'Author10'),
(8, 'Book8', 54, 'Author7'),
(9, 'Book9', 77, 'Author9'),
(10, 'Book10', 85, 'Author8'),
(11, 'Book11', 20, 'Author8'),
(12, 'Book12', 12, 'Author4'),
(13, 'Book13', 49, 'Author4'),
(14, 'Book14', 18, 'Author9'),
(15, 'Book15', 87, 'Author8'),
(16, 'Book16', 98, 'Author8'),
(17, 'Book17', 77, 'Author6'),
(18, 'Book18', 71, 'Author8'),
(19, 'Book19', 53, 'Author5'),
(20, 'Book20', 60, 'Author7'),
(21, 'Book21', 53, 'Author7'),
(22, 'Book22', 70, 'Author6'),
(23, 'Book23', 52, 'Author1'),
(24, 'Book24', 48, 'Author4'),
(25, 'Book25', 39, 'Author9'),
(26, 'Book26', 4, 'Author7'),
(27, 'Book27', 12, 'Author7'),
(28, 'Book28', 100, 'Author10'),
(29, 'Book29', 86, 'Author4'),
(30, 'Book30', 37, 'Author7'),
(31, 'Book31', 15, 'Author9'),
(32, 'Book32', 59, 'Author5'),
(33, 'Book33', 74, 'Author2'),
(34, 'Book34', 67, 'Author8'),
(35, 'Book35', 100, 'Author6'),
(36, 'Book36', 92, 'Author9'),
(37, 'Book37', 50, 'Author10'),
(38, 'Book38', 17, 'Author1'),
(39, 'Book39', 70, 'Author4'),
(40, 'Book40', 73, 'Author6'),
(41, 'Book41', 56, 'Author2'),
(42, 'Book42', 2, 'Author7'),
(43, 'Book43', 23, 'Author2'),
(44, 'Book44', 22, 'Author6'),
(45, 'Book45', 12, 'Author9'),
(46, 'Book46', 17, 'Author2'),
(47, 'Book47', 4, 'Author9'),
(48, 'Book48', 27, 'Author8'),
(49, 'Book49', 74, 'Author6'),
(50, 'Book50', 50, 'Author9'),
(51, 'Book51', 74, 'Author2'),
(52, 'Book52', 48, 'Author10'),
(53, 'Book53', 45, 'Author4'),
(54, 'Book54', 23, 'Author2'),
(55, 'Book55', 24, 'Author7'),
(56, 'Book56', 41, 'Author2'),
(57, 'Book57', 58, 'Author5'),
(58, 'Book58', 36, 'Author6'),
(59, 'Book59', 62, 'Author5'),
(60, 'Book60', 40, 'Author7'),
(61, 'Book61', 99, 'Author1'),
(62, 'Book62', 12, 'Author6'),
(63, 'Book63', 34, 'Author1'),
(64, 'Book64', 34, 'Author5'),
(65, 'Book65', 28, 'Author1'),
(66, 'Book66', 27, 'Author3'),
(67, 'Book67', 54, 'Author9'),
(68, 'Book68', 78, 'Author3'),
(69, 'Book69', 99, 'Author2'),
(70, 'Book70', 62, 'Author8'),
(71, 'Book71', 87, 'Author2'),
(72, 'Book72', 95, 'Author4'),
(73, 'Book73', 11, 'Author4'),
(74, 'Book74', 61, 'Author9'),
(75, 'Book75', 46, 'Author8'),
(76, 'Book76', 28, 'Author2'),
(77, 'Book77', 17, 'Author3'),
(78, 'Book78', 64, 'Author5'),
(79, 'Book79', 58, 'Author4'),
(80, 'Book80', 23, 'Author10'),
(81, 'Book81', 2, 'Author3'),
(82, 'Book82', 23, 'Author4'),
(83, 'Book83', 19, 'Author9'),
(84, 'Book84', 51, 'Author2'),
(85, 'Book85', 99, 'Author6'),
(86, 'Book86', 6, 'Author5'),
(87, 'Book87', 20, 'Author6'),
(88, 'Book88', 19, 'Author3'),
(89, 'Book89', 72, 'Author9'),
(90, 'Book90', 92, 'Author2'),
(91, 'Book91', 96, 'Author4'),
(92, 'Book92', 92, 'Author6'),
(93, 'Book93', 79, 'Author4'),
(94, 'Book94', 63, 'Author10'),
(95, 'Book95', 80, 'Author2'),
(96, 'Book96', 56, 'Author3'),
(97, 'Book97', 35, 'Author2'),
(98, 'Book98', 57, 'Author5'),
(99, 'Book99', 59, 'Author6'),
(100, 'Book100', 99, 'Author3');

-- --------------------------------------------------------

--
-- Table structure for table `borrowing_request`
--

CREATE TABLE `borrowing_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `duration` date NOT NULL,
  `is_accepted` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_all_users`
-- (See below for the actual view)
--
CREATE TABLE `get_all_users` (
`id` int(11)
,`name` varchar(50)
,`email` varchar(50)
,`role_id` int(11)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role_id`) VALUES
(1, 'User1', 'user1@example.com', 'password448525', 2),
(2, 'User2', 'user2@example.com', 'password456941', 1),
(3, 'User3', 'user3@example.com', 'password939128', 3),
(4, 'User4', 'user4@example.com', 'password324820', 3),
(5, 'User5', 'user5@example.com', 'password806718', 2),
(6, 'User6', 'user6@example.com', 'password59128', 1),
(7, 'User7', 'user7@example.com', 'password875486', 2),
(8, 'User8', 'user8@example.com', 'password200046', 3),
(9, 'User9', 'user9@example.com', 'password373776', 1),
(10, 'User10', 'user10@example.com', 'password268739', 3),
(11, 'User11', 'user11@example.com', 'password222368', 3),
(12, 'User12', 'user12@example.com', 'password305625', 3),
(13, 'User13', 'user13@example.com', 'password861022', 3),
(14, 'User14', 'user14@example.com', 'password388233', 3),
(15, 'User15', 'user15@example.com', 'password358101', 1),
(16, 'User16', 'user16@example.com', 'password625808', 2),
(17, 'User17', 'user17@example.com', 'password54737', 1),
(18, 'User18', 'user18@example.com', 'password396262', 2),
(19, 'User19', 'user19@example.com', 'password817097', 2),
(20, 'User20', 'user20@example.com', 'password896701', 3),
(21, 'User21', 'user21@example.com', 'password32215', 3),
(22, 'User22', 'user22@example.com', 'password470974', 2),
(23, 'User23', 'user23@example.com', 'password258225', 3),
(24, 'User24', 'user24@example.com', 'password878202', 1),
(25, 'User25', 'user25@example.com', 'password616334', 3),
(26, 'User26', 'user26@example.com', 'password447067', 3),
(27, 'User27', 'user27@example.com', 'password386332', 3),
(28, 'User28', 'user28@example.com', 'password590461', 1),
(29, 'User29', 'user29@example.com', 'password793307', 1),
(30, 'User30', 'user30@example.com', 'password195154', 1),
(31, 'User31', 'user31@example.com', 'password595851', 2),
(32, 'User32', 'user32@example.com', 'password393793', 1),
(33, 'User33', 'user33@example.com', 'password181412', 2),
(34, 'User34', 'user34@example.com', 'password725682', 3),
(35, 'User35', 'user35@example.com', 'password84176', 3),
(36, 'User36', 'user36@example.com', 'password243833', 1),
(37, 'User37', 'user37@example.com', 'password966639', 1),
(38, 'User38', 'user38@example.com', 'password101694', 2),
(39, 'User39', 'user39@example.com', 'password608553', 1),
(40, 'User40', 'user40@example.com', 'password737683', 1),
(41, 'User41', 'user41@example.com', 'password862760', 2),
(42, 'User42', 'user42@example.com', 'password100748', 3),
(43, 'User43', 'user43@example.com', 'password915463', 2),
(44, 'User44', 'user44@example.com', 'password275072', 2),
(45, 'User45', 'user45@example.com', 'password628971', 2),
(46, 'User46', 'user46@example.com', 'password319641', 3),
(47, 'User47', 'user47@example.com', 'password711292', 1),
(48, 'User48', 'user48@example.com', 'password597538', 2),
(49, 'User49', 'user49@example.com', 'password853816', 3),
(50, 'User50', 'user50@example.com', 'password476464', 2),
(51, 'User51', 'user51@example.com', 'password820873', 1),
(52, 'User52', 'user52@example.com', 'password674974', 3),
(53, 'User53', 'user53@example.com', 'password912251', 3),
(54, 'User54', 'user54@example.com', 'password536332', 3),
(55, 'User55', 'user55@example.com', 'password944909', 3),
(56, 'User56', 'user56@example.com', 'password115550', 2),
(57, 'User57', 'user57@example.com', 'password743022', 3),
(58, 'User58', 'user58@example.com', 'password368460', 3),
(59, 'User59', 'user59@example.com', 'password613236', 3),
(60, 'User60', 'user60@example.com', 'password960801', 1),
(61, 'User61', 'user61@example.com', 'password964297', 3),
(62, 'User62', 'user62@example.com', 'password939082', 2),
(63, 'User63', 'user63@example.com', 'password802521', 1),
(64, 'User64', 'user64@example.com', 'password195358', 1),
(65, 'User65', 'user65@example.com', 'password569230', 1),
(66, 'User66', 'user66@example.com', 'password260074', 3),
(67, 'User67', 'user67@example.com', 'password592681', 3),
(68, 'User68', 'user68@example.com', 'password183182', 2),
(69, 'User69', 'user69@example.com', 'password137868', 3),
(70, 'User70', 'user70@example.com', 'password139795', 2),
(71, 'User71', 'user71@example.com', 'password285373', 3),
(72, 'User72', 'user72@example.com', 'password7478', 2),
(73, 'User73', 'user73@example.com', 'password181271', 1),
(74, 'User74', 'user74@example.com', 'password883924', 3),
(75, 'User75', 'user75@example.com', 'password875805', 3),
(76, 'User76', 'user76@example.com', 'password727256', 1),
(77, 'User77', 'user77@example.com', 'password8867', 2),
(78, 'User78', 'user78@example.com', 'password862564', 3),
(79, 'User79', 'user79@example.com', 'password286223', 2),
(80, 'User80', 'user80@example.com', 'password843422', 1),
(81, 'User81', 'user81@example.com', 'password358440', 3),
(82, 'User82', 'user82@example.com', 'password261935', 3),
(83, 'User83', 'user83@example.com', 'password234358', 3),
(84, 'User84', 'user84@example.com', 'password385984', 3),
(85, 'User85', 'user85@example.com', 'password226848', 2),
(86, 'User86', 'user86@example.com', 'password976290', 1),
(87, 'User87', 'user87@example.com', 'password200903', 1),
(88, 'User88', 'user88@example.com', 'password75647', 3),
(89, 'User89', 'user89@example.com', 'password775526', 3),
(90, 'User90', 'user90@example.com', 'password650689', 2),
(91, 'User91', 'user91@example.com', 'password926870', 1),
(92, 'User92', 'user92@example.com', 'password682280', 2),
(93, 'User93', 'user93@example.com', 'password630793', 3),
(94, 'User94', 'user94@example.com', 'password107125', 1),
(95, 'User95', 'user95@example.com', 'password643247', 1),
(96, 'User96', 'user96@example.com', 'password894862', 2),
(97, 'User97', 'user97@example.com', 'password544568', 1),
(98, 'User98', 'user98@example.com', 'password38253', 1),
(99, 'User99', 'user99@example.com', 'password557563', 3),
(100, 'User100', 'user100@example.com', '', 2);

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `user_roles`
--

INSERT INTO `user_roles` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user'),
(3, 'normal_user');

-- --------------------------------------------------------

--
-- Structure for view `get_all_users`
--
DROP TABLE IF EXISTS `get_all_users`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_all_users`  AS SELECT `users`.`id` AS `id`, `users`.`name` AS `name`, `users`.`email` AS `email`, `users`.`role_id` AS `role_id` FROM `users` WHERE `users`.`role_id` = 11  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `borrowing_request`
--
ALTER TABLE `borrowing_request`
  ADD PRIMARY KEY (`id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `borrowing_request`
--
ALTER TABLE `borrowing_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `borrowing_request`
--
ALTER TABLE `borrowing_request`
  ADD CONSTRAINT `borrowing_request_ibfk_1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `borrowing_request_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `user_roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
