-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3388
-- Generation Time: Apr 25, 2023 at 08:27 PM
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
-- Database: `book_store`
--

-- --------------------------------------------------------

--
-- Stand-in structure for view `all_accepted_books_by_user`
-- (See below for the actual view)
--
CREATE TABLE `all_accepted_books_by_user` (
`id` int(11)
,`name` varchar(255)
,`author_name` varchar(255)
,`catigory_id` int(11)
,`rack_number` int(11)
,`image_url` varchar(255)
,`is_borrowed` tinyint(1)
);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'defualt_book_name',
  `author_name` varchar(255) NOT NULL DEFAULT 'defualt_author_name',
  `catigory_id` int(11) NOT NULL DEFAULT 12,
  `rack_number` int(11) NOT NULL DEFAULT 0,
  `image_url` varchar(255) NOT NULL DEFAULT 'defualt_image_url',
  `is_borrowed` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `author_name`, `catigory_id`, `rack_number`, `image_url`, `is_borrowed`) VALUES
(127, 'data analysis dummies', 'slnvanvfmsalm.', 1, 0, '1682113599030.png', 1),
(129, 'Another Up', 'rawan gamal', 1, 0, '1682253753926.png', 0),
(130, 'Another Up', 'rawan gamal', 1, 0, '', 0),
(131, 'defualt_book_name', 'defualt_author_name', 12, 0, 'defualt_image_url', 0);

-- --------------------------------------------------------

--
-- Table structure for table `book_catigories`
--

CREATE TABLE `book_catigories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `book_catigories`
--

INSERT INTO `book_catigories` (`id`, `name`) VALUES
(1, 'Fiction'),
(2, 'Biography'),
(3, 'History'),
(7, 'Science'),
(10, 'Travel'),
(11, 'Children'),
(12, 'Not-Catigorized');

-- --------------------------------------------------------

--
-- Table structure for table `borrowing_request`
--

CREATE TABLE `borrowing_request` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `requested_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `duration_in_days` int(11) NOT NULL DEFAULT 2,
  `is_accepted` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `borrowing_request`
--

INSERT INTO `borrowing_request` (`id`, `user_id`, `book_id`, `requested_at`, `duration_in_days`, `is_accepted`) VALUES
(1, 133, 129, '2023-04-23 20:16:36', 2, 1),
(2, 133, 129, '2023-04-23 20:32:58', 2, 0),
(3, 133, 129, '2023-04-23 20:33:21', 2, 0),
(4, 137, 127, '2023-04-25 17:04:31', 6, 0),
(5, 140, 131, '2023-04-25 17:57:05', 2, 0);

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_all_users`
-- (See below for the actual view)
--
CREATE TABLE `get_all_users` (
`id` int(11)
,`name` varchar(255)
,`email` varchar(255)
,`role_id` int(11)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT 'defualt_user_name',
  `email` varchar(255) NOT NULL DEFAULT 'defualt_user_email',
  `password` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 3,
  `token` varchar(255) NOT NULL DEFAULT 'defualt_user_token'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role_id`, `token`) VALUES
(133, 'shehabgamal;', 'shehabgamal@gmail.com', '$2b$10$D/GYqig5SFcsHoXdU0eNNOM7e3lRSa8Yi9OzSpC6ARdoPv.Z.4k7C', 1, '775df8297a72dafe3a9d9ebcfbc4ec21'),
(135, 'shehabgamal;', 'shehabgamal@gmail.com', '$2b$10$Rx1oiUqIfiyF3X0gmwJuPe42OS3rSEBjAuI3Mt3UOFZAOWkrl6NB6', 2, '38874843dc2082f05eb5f4fa3b96cadd'),
(137, 'boody', 'boody@Spring.com', '12345678', 1, 'randomGeneratedToken'),
(138, 'boody', 'boody@Spring.com', '12345678', 1, 'anotherRadomToken'),
(139, 'shehabgamal;', 'sensi@gmail.com', '$2b$10$gZoiOIKFU3.0KvLyaf8uweIiYlfS5D8S2grY2eJOimtwDnILefgba', 3, 'ee03d340bf8186a7f291454a11b38513'),
(140, 'defualt_user_name', 'defualt_user_email', '', 3, 'defualt_user_token');

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
-- Structure for view `all_accepted_books_by_user`
--
DROP TABLE IF EXISTS `all_accepted_books_by_user`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `all_accepted_books_by_user`  AS SELECT `books`.`id` AS `id`, `books`.`name` AS `name`, `books`.`author_name` AS `author_name`, `books`.`catigory_id` AS `catigory_id`, `books`.`rack_number` AS `rack_number`, `books`.`image_url` AS `image_url`, `books`.`is_borrowed` AS `is_borrowed` FROM `books` WHERE `books`.`id` in (select `borrowing_request`.`book_id` from (`borrowing_request` join `users` on(`borrowing_request`.`user_id` = `users`.`id` AND `borrowing_request`.`is_accepted` = 1)))  ;

-- --------------------------------------------------------

--
-- Structure for view `get_all_users`
--
DROP TABLE IF EXISTS `get_all_users`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_all_users`  AS SELECT `users`.`id` AS `id`, `users`.`name` AS `name`, `users`.`email` AS `email`, `users`.`role_id` AS `role_id` FROM `users` WHERE `users`.`role_id` = 11111111  ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `catigory_id` (`catigory_id`);

--
-- Indexes for table `book_catigories`
--
ALTER TABLE `book_catigories`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=132;

--
-- AUTO_INCREMENT for table `book_catigories`
--
ALTER TABLE `book_catigories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `borrowing_request`
--
ALTER TABLE `borrowing_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=141;

--
-- AUTO_INCREMENT for table `user_roles`
--
ALTER TABLE `user_roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`catigory_id`) REFERENCES `book_catigories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
