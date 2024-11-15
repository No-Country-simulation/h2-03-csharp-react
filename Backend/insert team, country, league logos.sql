USE [WakiBackDB]
GO
SET IDENTITY_INSERT [dbo].[Countrys] ON 

INSERT [dbo].[Countrys] ([Id], [CountryId], [Name], [LogoUrl]) VALUES (1, 60, N'spain', N'https://media.api-sports.io/football/teams/25.png

')
INSERT [dbo].[Countrys] ([Id], [CountryId], [Name], [LogoUrl]) VALUES (2, 8, N'england', N'https://media.api-sports.io/football/teams/10.png

')
INSERT [dbo].[Countrys] ([Id], [CountryId], [Name], [LogoUrl]) VALUES (3, 27, N'germany', N'https://media.api-sports.io/football/teams/25.png

')
INSERT [dbo].[Countrys] ([Id], [CountryId], [Name], [LogoUrl]) VALUES (4, 9, N'france', N'https://media.api-sports.io/football/teams/2.png

')
INSERT [dbo].[Countrys] ([Id], [CountryId], [Name], [LogoUrl]) VALUES (5, 67, N'brazil', N'https://media.api-sports.io/football/teams/6.png

')
INSERT [dbo].[Countrys] ([Id], [CountryId], [Name], [LogoUrl]) VALUES (6, 68, N'argentina', N'https://media.api-sports.io/football/teams/26.png

')
SET IDENTITY_INSERT [dbo].[Countrys] OFF
SET IDENTITY_INSERT [dbo].[Leagues] ON 

INSERT [dbo].[Leagues] ([Id], [LeagueId], [Name], [CountryAPIId], [LogoUrl], [DisplayName], [Created], [CreatedBy], [Modified], [ModifiedBy], [Deleted], [DeletedBy], [Locked], [LockedBy]) VALUES (1, 297, N'La Liga', 1, N'https://media.api-sports.io/football/leagues/140.png', N'La Liga', CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Leagues] ([Id], [LeagueId], [Name], [CountryAPIId], [LogoUrl], [DisplayName], [Created], [CreatedBy], [Modified], [ModifiedBy], [Deleted], [DeletedBy], [Locked], [LockedBy]) VALUES (2, 228, N'Premier League', 2, N'https://media.api-sports.io/football/leagues/39.png', N'Premier League', CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Leagues] ([Id], [LeagueId], [Name], [CountryAPIId], [LogoUrl], [DisplayName], [Created], [CreatedBy], [Modified], [ModifiedBy], [Deleted], [DeletedBy], [Locked], [LockedBy]) VALUES (3, 241, N'Bundesliga', 3, N'https://media.api-sports.io/football/leagues/78.png', N'Bundesliga', CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Leagues] ([Id], [LeagueId], [Name], [CountryAPIId], [LogoUrl], [DisplayName], [Created], [CreatedBy], [Modified], [ModifiedBy], [Deleted], [DeletedBy], [Locked], [LockedBy]) VALUES (4, 235, N'Ligue 1', 4, N'https://media.api-sports.io/football/leagues/61.png', N'Ligue 1', CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Leagues] ([Id], [LeagueId], [Name], [CountryAPIId], [LogoUrl], [DisplayName], [Created], [CreatedBy], [Modified], [ModifiedBy], [Deleted], [DeletedBy], [Locked], [LockedBy]) VALUES (5, 215, N'Serie A', 5, N'https://apiv2.allsportsapi.com/logo/logo_leagues/207_serie-a.png', N'Serie A', CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, NULL, NULL, NULL, NULL)
INSERT [dbo].[Leagues] ([Id], [LeagueId], [Name], [CountryAPIId], [LogoUrl], [DisplayName], [Created], [CreatedBy], [Modified], [ModifiedBy], [Deleted], [DeletedBy], [Locked], [LockedBy]) VALUES (6, 206, N'Liga Profesional', 6, N'https://media.api-sports.io/football/leagues/128.png', N'Liga Profesional', CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, CAST(N'2024-10-27 13:44:36.4079747' AS DateTime2), 1, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Leagues] OFF
SET IDENTITY_INSERT [dbo].[TeamAPI] ON 

INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (1, 4887, N'Athletic Bilbao', N'https://media.api-sports.io/football/teams/531.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (2, 4891, N'Getafe', N'https://media.api-sports.io/football/teams/546.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (3, 4886, N'Real Betis', N'https://media.api-sports.io/football/teams/543.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (4, 2798, N'Girona', N'https://media.api-sports.io/football/teams/547.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (5, 2911, N'Celta Vigo', N'https://media.api-sports.io/football/teams/538.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (6, 4892, N'Alaves', N'https://media.api-sports.io/football/teams/543.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (7, 4903, N'Las Palmas', N'https://media.api-sports.io/football/teams/534.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (8, 3019, N'Sevilla', N'https://media.api-sports.io/football/teams/536.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (9, 4888, N'Osasuna', N'https://media.api-sports.io/football/teams/727.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (10, 4897, N'Leganes', N'https://media.api-sports.io/football/teams/537.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (11, 4890, N'Valencia', N'https://media.api-sports.io/football/teams/532.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (12, 4884, N'Barcelona', N'https://media.api-sports.io/football/teams/529.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (13, 4885, N'Real Sociedad', N'https://media.api-sports.io/football/teams/548.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (14, 2910, N'Rayo Vallecano', N'https://media.api-sports.io/football/teams/728.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (15, 2802, N'Mallorca', N'https://media.api-sports.io/football/teams/798.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (16, 4883, N'Real Madrid', N'https://media.api-sports.io/football/teams/541.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (17, 3121, N'Real Valladolid', N'https://media.api-sports.io/football/teams/720.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (18, 4895, N'Espanyol', N'https://media.api-sports.io/football/teams/540.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (19, 2907, N'Villarreal', N'https://media.api-sports.io/football/teams/533.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (20, 4882, N'Atletico Madrid', N'https://media.api-sports.io/football/teams/530.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (21, 4137, N'Manchester United', N'https://media.api-sports.io/football/teams/33.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (22, 4145, N'Fulham', N'https://media.api-sports.io/football/teams/36.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (23, 4157, N'Ipswich Town', N'https://media.api-sports.io/football/teams/57.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (24, 4138, N'Liverpool', N'https://media.api-sports.io/football/teams/40.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (25, 4149, N'Nottingham Forest', N'https://media.api-sports.io/football/teams/65.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (26, 3072, N'AFC Bournemouth', N'https://media.api-sports.io/football/teams/35.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (27, 3071, N'Newcastle United', N'https://media.api-sports.io/football/teams/34.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (28, 4142, N'Southampton', N'https://media.api-sports.io/football/teams/41.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (29, 4139, N'Everton', N'https://media.api-sports.io/football/teams/45.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (30, 3200, N'Brighton & Hove Albion', N'https://media.api-sports.io/football/teams/51.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (31, 3068, N'Arsenal', N'https://media.api-sports.io/football/teams/42.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (32, 3074, N'Wolverhampton Wanderers', N'https://media.api-sports.io/football/teams/39.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (33, 3059, N'West Ham United', N'https://media.api-sports.io/football/teams/48.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (34, 2912, N'Aston Villa', N'https://media.api-sports.io/football/teams/66.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (35, 4148, N'Brentford', N'https://media.api-sports.io/football/teams/35.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (36, 4140, N'Crystal Palace', N'https://media.api-sports.io/football/teams/52.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (37, 2916, N'Chelsea', N'https://media.api-sports.io/football/teams/49.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (38, 4136, N'Manchester City', N'https://media.api-sports.io/football/teams/50.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (39, 3768, N'Leicester City', N'https://media.api-sports.io/football/teams/46.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (40, 2909, N'Tottenham Hotspur', N'https://media.api-sports.io/football/teams/47.png')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (41, 4272, N'Borussia M''gladbach', N'https://media.api-sports.io/football/teams/1864.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (42, 4271, N'Bayer Leverkusen', N'https://media.api-sports.io/football/teams/168.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (43, 3297, N'Hoffenheim', N'https://media.api-sports.io/football/teams/167.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (44, 4281, N'Holstein Kiel', N'https://media.api-sports.io/football/teams/191.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (45, 3116, N'Augsburg', N'https://media.api-sports.io/football/teams/170.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (46, 4273, N'Werder Bremen', N'https://media.api-sports.io/football/teams/162.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (47, 4274, N'Freiburg', N'https://media.api-sports.io/football/teams/160.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (48, 4276, N'Stuttgart', N'https://media.api-sports.io/football/teams/172.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (49, 3292, N'RB Leipzig', N'https://media.api-sports.io/football/teams/173.png






')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (50, 3113, N'Bochum', N'https://media.api-sports.io/football/teams/176.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (51, 3003, N'Mainz', N'https://media.api-sports.io/football/teams/164.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (52, 3775, N'Union Berlin', N'https://media.api-sports.io/football/teams/182.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (53, 3204, N'Borussia Dortmund', N'https://media.api-sports.io/football/teams/165.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (54, 2998, N'Eintracht Frankfurt', N'https://media.api-sports.io/football/teams/169.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (55, 2983, N'Wolfsburg', N'https://media.api-sports.io/football/teams/161.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (56, 4270, N'Bayern Munich', N'https://media.api-sports.io/football/teams/157.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (57, 3339, N'St. Pauli', N'https://media.api-sports.io/football/teams/186.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (58, 4280, N'Heidenheim', N'https://media.api-sports.io/football/teams/180.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (59, 3139, N'Le Havre', N'https://media.api-sports.io/football/teams/111.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (60, 4228, N'PSG', N'https://media.api-sports.io/football/teams/85.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (61, 3199, N'Brest', N'https://media.api-sports.io/football/teams/106.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (62, 3769, N'Marseille', N'https://media.api-sports.io/football/teams/81.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (63, 3354, N'Reims', N'https://media.api-sports.io/football/teams/93.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (64, 4229, N'Lille', N'https://media.api-sports.io/football/teams/79.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (65, 4234, N'Monaco', N'https://media.api-sports.io/football/teams/91.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (66, 3386, N'Saint-Etienne', N'https://media.api-sports.io/football/teams/1063.png






')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (67, 3002, N'Auxerre', N'https://media.api-sports.io/football/teams/108.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (68, 3027, N'Nice', N'https://media.api-sports.io/football/teams/84.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (69, 3375, N'Montpellier', N'https://media.api-sports.io/football/teams/82.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (70, 4231, N'Strasbourg', N'https://media.api-sports.io/football/teams/95.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (71, 3129, N'Toulouse', N'https://media.api-sports.io/football/teams/96.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (72, 4232, N'Nantes', N'https://media.api-sports.io/football/teams/83.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (73, 2849, N'Angers', N'https://media.api-sports.io/football/teams/77.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (74, 3295, N'Lens', N'https://media.api-sports.io/football/teams/116.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (75, 3001, N'Rennes', N'https://media.api-sports.io/football/teams/94.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (76, 4230, N'Lyon', N'https://media.api-sports.io/football/teams/80.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (77, 2894, N'Internacional', N'https://media.api-sports.io/football/teams/119.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (78, 2810, N'Bahia', N'https://media.api-sports.io/football/teams/118.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (79, 3975, N'Criciuma', N'https://media.api-sports.io/football/teams/140.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (80, 3963, N'Juventude', N'https://media.api-sports.io/football/teams/152.png






')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (81, 3344, N'Fluminense', N'https://media.api-sports.io/football/teams/124.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (82, 3222, N'RB Bragantino', N'https://media.api-sports.io/football/teams/794.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (83, 3067, N'Sao Paulo', N'https://media.api-sports.io/football/teams/126.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (84, 3950, N'Fortaleza', N'https://media.api-sports.io/football/teams/154.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (85, 2805, N'Athletico Paranaense', N'https://media.api-sports.io/football/teams/134.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (86, 3497, N'Cuiaba', N'https://media.api-sports.io/football/teams/1193.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (87, 3960, N'Atletico Goianiense', N'https://media.api-sports.io/football/teams/144.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (88, 3946, N'Flamengo', N'https://media.api-sports.io/football/teams/127.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (89, 3952, N'Vasco da Gama', N'https://media.api-sports.io/football/teams/133.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (90, 3207, N'Gremio', N'https://media.api-sports.io/football/teams/130.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (91, 3949, N'Corinthians', N'https://media.api-sports.io/football/teams/131.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (92, 3953, N'Atletico Mineiro', N'https://media.api-sports.io/football/teams/1062.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (93, 3956, N'Cruzeiro', N'https://media.api-sports.io/football/teams/135.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (94, 3954, N'Botafogo', N'https://media.api-sports.io/football/teams/120.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (95, 3969, N'Vitoria', N'https://media.api-sports.io/football/teams/136.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (96, 3948, N'Palmeiras', N'https://media.api-sports.io/football/teams/121.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (97, 3858, N'Tigre', N'https://media.api-sports.io/football/teams/452.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (98, 3860, N'Sarmiento', N'https://media.api-sports.io/football/teams/474.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (99, 3846, N'Instituto', N'https://media.api-sports.io/football/teams/478.png

')
GO
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (100, 10899, N'Deportivo Riestra', N'https://media.api-sports.io/football/teams/476.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (101, 3840, N'Atletico Tucuman', N'https://media.api-sports.io/football/teams/455.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (102, 3848, N'Rosario Central', N'https://media.api-sports.io/football/teams/437.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (103, 3862, N'Central Cordoba SdE', N'https://media.api-sports.io/football/teams/1065.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (104, 3857, N'Newell''s Old Boys', N'https://media.api-sports.io/football/teams/457.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (105, 3841, N'Barracas Central', N'https://media.api-sports.io/football/teams/2432.png






')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (106, 3850, N'Velez Sarsfield', N'https://media.api-sports.io/football/teams/438.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (107, 3849, N'Talleres de Cordoba', N'https://media.api-sports.io/football/teams/456.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (108, 3843, N'Gimnasia La Plata', N'https://media.api-sports.io/football/teams/434.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (109, 10898, N'Independiente Rivadavia', N'https://media.api-sports.io/football/teams/473.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (110, 3845, N'Independiente', N'https://media.api-sports.io/football/teams/453.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (111, 2813, N'Banfield', N'https://media.api-sports.io/football/teams/449.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (112, 3844, N'Huracan', N'https://media.api-sports.io/football/teams/445.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (113, 3851, N'San Lorenzo', N'https://media.api-sports.io/football/teams/460.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (114, 2763, N'Lanus', N'https://media.api-sports.io/football/teams/446.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (115, 3859, N'Platense', N'https://media.api-sports.io/football/teams/1064.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (116, 3854, N'Boca Juniors', N'https://media.api-sports.io/football/teams/451.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (117, 3855, N'Racing Club', N'https://media.api-sports.io/football/teams/436.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (118, 3861, N'Union', N'https://media.api-sports.io/football/teams/441.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (119, 2814, N'Godoy Cruz', N'https://media.api-sports.io/football/teams/439.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (120, 3853, N'Defensa y Justicia', N'https://media.api-sports.io/football/teams/442.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (121, 3847, N'River Plate', N'https://media.api-sports.io/football/teams/435.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (122, 3838, N'Argentinos Juniors', N'https://media.api-sports.io/football/teams/458.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (123, 3852, N'Estudiantes', N'https://media.api-sports.io/football/teams/450.png

')
INSERT [dbo].[TeamAPI] ([Id], [TeamId], [Name], [LogoUrl]) VALUES (124, 3856, N'Belgrano', N'https://media.api-sports.io/football/teams/440.png

')
SET IDENTITY_INSERT [dbo].[TeamAPI] OFF
