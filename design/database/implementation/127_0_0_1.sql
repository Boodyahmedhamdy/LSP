-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 23, 2023 at 12:13 PM
-- Server version: 5.7.36
-- PHP Version: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `book store`
--
CREATE DATABASE IF NOT EXISTS `book store` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `book store`;

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

DROP TABLE IF EXISTS `books`;
CREATE TABLE IF NOT EXISTS `books` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `author_name` varchar(255) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `name`, `price`, `author_name`, `image_url`) VALUES
(127, 'data analysis dummies', 555, 'slnvanvfmsalm.', '1682113599030.png');

-- --------------------------------------------------------

--
-- Table structure for table `borrowing_request`
--

DROP TABLE IF EXISTS `borrowing_request`;
CREATE TABLE IF NOT EXISTS `borrowing_request` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `duration` date NOT NULL,
  `is_accepted` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `book_id` (`book_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Stand-in structure for view `get_all_users`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `get_all_users`;
CREATE TABLE IF NOT EXISTS `get_all_users` (
`id` int(11)
,`name` varchar(50)
,`email` varchar(50)
,`role_id` int(11)
);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT '0',
  `token` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `role_id` (`role_id`)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role_id`, `token`) VALUES
(125, 'shehabgamal;', 'hello565@gmail.com', '$2b$10$guc.r9aii4sye6CupJh9YedvYBGaEQ3QWwGn2xVEFTthyAO6SZKyK', 1, '5d26f4d7725bff3ecc5af33b7a3df955'),
(126, 'shehabgamal;', 'hello565@gmail.com', '$2b$10$pF9Af1UDK5yiwpphJIidguryRYCYgVORQY5iEaox/7XPv5JEJjm26', 1, 'cc094a799a5bb2cc5c078b4a02eb262a'),
(127, 'shehabgamal;', 'gamalel@gmail.com', '$2b$10$GBNJoE1dcr.eVngHlXrHEO69difD0ylJFEgxlttFo.Bgly.a6wMYS', 1, 'fd53952af22e2e88b65c8acd6f62813b'),
(128, 'shehabgamal;', 'gamalel@gmail.com', '$2b$10$rjJ1FDbzp..7PVXyUGCfIu5PNCWl5IBSCM9VrzFT9h0DFRoMFkC6C', 1, 'b93099a30834b620899aaf671de1d4e9'),
(129, 'shehabgamal;', 'gamalel@gmail.com', '$2b$10$4DZU3PEk8UuMxYPZkRP8A.AD4OVvUu/hW4JLS9Ho7oR8Pgn6/rZUW', 1, '3412c2fb94209301cc220ef879d6b8a1'),
(130, 'shahdgamal;', 'shahad@gmail.com', '$2b$10$Grn4K2mLx2N6uP7HWWDwQO1DZdSAH5bIDtXgKpTFQMXLJvt1Sk0/y', 1, 'f040f80b4d48d84b115ba2c541f242c9'),
(131, 'shahdgamal;', 'ahdsvsv@gmail.com', '$2b$10$tT6Al2kXs7AIc0hNJGTcwulN0zKHTsZiY4tkYN.6oOLDlcopKHR0q', 1, '5fd1d703b5e2a66833a23a1e0ff4a67b');

-- --------------------------------------------------------

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
CREATE TABLE IF NOT EXISTS `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

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

DROP VIEW IF EXISTS `get_all_users`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `get_all_users`  AS SELECT `users`.`id` AS `id`, `users`.`name` AS `name`, `users`.`email` AS `email`, `users`.`role_id` AS `role_id` FROM `users` WHERE (`users`.`role_id` = 11) ;

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
--
-- Database: `movies`
--
CREATE DATABASE IF NOT EXISTS `movies` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `movies`;

-- --------------------------------------------------------

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
CREATE TABLE IF NOT EXISTS `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `movie`
--

INSERT INTO `movie` (`id`, `name`, `description`) VALUES
(24, 'narouto', 'he hopes to become hokage'),
(22, 'bourto', 'bad ass'),
(23, 'bleach', 'sheinagamy');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
