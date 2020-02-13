CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `detail_info` json DEFAULT NULL,
  `create_time` varchar(255) DEFAULT NULL,
  `modified_time` varchar(255) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY(`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `user` set email='1@example.com', password="123456";
INSERT INTO `user` set email='2@example.com', password="123456";
INSERT INTO `user` set email='3@example.com', password="123456";