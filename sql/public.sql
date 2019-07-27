/*
 Navicat Premium Data Transfer

 Source Server         : vgw
 Source Server Type    : PostgreSQL
 Source Server Version : 110004
 Source Host           : localhost:5432
 Source Catalog        : pmker
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 110004
 File Encoding         : 65001

 Date: 27/07/2019 12:39:17
*/


-- ----------------------------
-- Table structure for launch_logs
-- ----------------------------
DROP TABLE IF EXISTS "public"."launch_logs";
CREATE TABLE "public"."launch_logs" (
  "id" int4 NOT NULL DEFAULT nextval('launch_logs_id_seq'::regclass),
  "item_type" text COLLATE "pg_catalog"."default" NOT NULL,
  "item_id" int4 NOT NULL,
  "status" text COLLATE "pg_catalog"."default" NOT NULL,
  "transaction_hash" text COLLATE "pg_catalog"."default",
  "block_number" int4,
  "t_from" text COLLATE "pg_catalog"."default" NOT NULL,
  "t_to" text COLLATE "pg_catalog"."default" NOT NULL,
  "value" numeric(32,18),
  "gas_limit" int4,
  "gas_used" int4,
  "gas_price" numeric(32,18),
  "nonce" int4,
  "data" text COLLATE "pg_catalog"."default" NOT NULL,
  "executed_at" timestamp(6),
  "updated_at" timestamp(6),
  "created_at" timestamp(6),
  "amount" varchar(255) COLLATE "pg_catalog"."default",
  "token_address" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."launch_logs" OWNER TO "pmker";

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS "public"."orders";
CREATE TABLE "public"."orders" (
  "id" int4 NOT NULL DEFAULT nextval('orders_id_seq'::regclass),
  "walletAddress" varchar(255) COLLATE "pg_catalog"."default" NOT NULL,
  "tokenId" varchar(250) COLLATE "pg_catalog"."default" NOT NULL,
  "inTxHash" varchar(250) COLLATE "pg_catalog"."default",
  "outTxHash" varchar(250) COLLATE "pg_catalog"."default",
  "amount" varchar(250) COLLATE "pg_catalog"."default",
  "fee" varchar(250) COLLATE "pg_catalog"."default",
  "state" varchar(250) COLLATE "pg_catalog"."default",
  "dateTime" varchar(250) COLLATE "pg_catalog"."default",
  "type" int4 DEFAULT 0,
  "createdAt" timestamptz(6),
  "updatedAt" timestamptz(6)
)
;
ALTER TABLE "public"."orders" OWNER TO "pmker";

-- ----------------------------
-- Records of orders
-- ----------------------------
BEGIN;
INSERT INTO "public"."orders" VALUES (4, 'vite_d60f1ead1395890bbb85f17081e94ce20b1e906807c175e4c1', 'tti_60844084aa2db10609358605', '0x36ae4067cd5a0b2cfc2aca4370a22c517c65b38e57992a555cf213ace727a562', 'dc153b88a61ac2dd2e49d64cde3ab5381560ecfd91388a79108d19909bca45ed', '11000000000000000000', '0', '1', NULL, 0, '2019-07-27 04:29:59.369+00', '2019-07-27 04:29:59.369+00');
COMMIT;

-- ----------------------------
-- Table structure for tokens
-- ----------------------------
DROP TABLE IF EXISTS "public"."tokens";
CREATE TABLE "public"."tokens" (
  "id" int4 NOT NULL DEFAULT nextval('vite_tokens_id_seq'::regclass),
  "tokenId" varchar(255) COLLATE "pg_catalog"."default",
  "tokenSymbol" varchar(32) COLLATE "pg_catalog"."default" NOT NULL,
  "type" int4 DEFAULT 0,
  "depositState" varchar(10) COLLATE "pg_catalog"."default" DEFAULT 'OPEN'::character varying,
  "withdrawState" varchar(10) COLLATE "pg_catalog"."default" DEFAULT 'OPEN'::character varying,
  "depositAddress" varchar(50) COLLATE "pg_catalog"."default",
  "labelName" varchar(32) COLLATE "pg_catalog"."default",
  "label" varchar(32) COLLATE "pg_catalog"."default",
  "minimumDepositAmount" int4 DEFAULT 1,
  "confirmationCount" int4 DEFAULT 20,
  "noticeMsg" varchar(255) COLLATE "pg_catalog"."default",
  "minimumWithdrawAmount" varchar(255) COLLATE "pg_catalog"."default",
  "maximumWithdrawAmount" varchar(255) COLLATE "pg_catalog"."default",
  "gatewayAddress" varchar(255) COLLATE "pg_catalog"."default",
  "fee" int4 DEFAULT 2,
  "createdAt" timestamptz(6),
  "updatedAt" timestamptz(6)
)
;
ALTER TABLE "public"."tokens" OWNER TO "pmker";

-- ----------------------------
-- Records of tokens
-- ----------------------------
BEGIN;
INSERT INTO "public"."tokens" VALUES (1, 'tti_60844084aa2db10609358605', 'two', 0, 'OPEN', 'OPEN', '', '', '', 100, 10, 'ADF', '1000000000000000000', '100000000000000000000000', 'vite_1134076edbfc02c03770b89a8428a7a5d3e4c6bda32d1092c2', 2, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS "public"."transactions";
CREATE TABLE "public"."transactions" (
  "id" int4 NOT NULL DEFAULT nextval('transactions_id_seq'::regclass),
  "transaction_hash" text COLLATE "pg_catalog"."default",
  "market_id" text COLLATE "pg_catalog"."default" NOT NULL,
  "status" text COLLATE "pg_catalog"."default" NOT NULL,
  "executed_at" timestamp(6),
  "updated_at" timestamp(6),
  "created_at" timestamp(6),
  "action" varchar(255) COLLATE "pg_catalog"."default",
  "blocknumber" varchar(255) COLLATE "pg_catalog"."default"
)
;
ALTER TABLE "public"."transactions" OWNER TO "pmker";

-- ----------------------------
-- Table structure for wallets
-- ----------------------------
DROP TABLE IF EXISTS "public"."wallets";
CREATE TABLE "public"."wallets" (
  "id" int4 NOT NULL DEFAULT nextval('wallets_id_seq'::regclass),
  "eth_address" varchar(250) COLLATE "pg_catalog"."default" NOT NULL,
  "vite_address" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamptz(6),
  "updatedAt" timestamptz(6)
)
;
ALTER TABLE "public"."wallets" OWNER TO "pmker";

-- ----------------------------
-- Records of wallets
-- ----------------------------
BEGIN;
INSERT INTO "public"."wallets" VALUES (379, '0xccd0c7e5e60522159d5d31aea1ef88d4112a063f', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (380, '0xb245a9e3c8de08a166f74f71705884d98b74d3a7', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (381, '0x009aaa564e4d944970b0d95ccebf0eab5cbabbb3', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (382, '0xee7d478aa78770dd55fa291e698a488be1103f03', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (383, '0x5194dd20459f1f8cf6abef6d02be617fa47ab0f3', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (384, '0xeba4e7a53a7c934a13ee094026b1ce5f221a0625', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (385, '0x9ad5959a70d37a0fc5bc98dcb811476b1e448a17', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (386, '0x3ddd074d20dc9745f28ac96259519d11eaf89d43', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (387, '0xd13949dc87c4a566da7a0e97ccc1923a5c063813', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (388, '0x974312da56a8b3eccb30889b060521ef263724bb', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (389, '0x1b96cd0cfe33d5614dccf3c208f1edba32cd7881', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (390, '0x2dacfc76e3b5b5e55265a49ae62847a71ef72f94', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (391, '0xb7f9b53b6e69902c5268ca716efe28695ed1b63f', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (392, '0x1794941484169c0d2948be3cdf5cc3225fcca290', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (393, '0x6ddbb91d51532ebe3c5ce4d8accc2209a62667b6', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (394, '0xc7db96f97f5748a7a3f82949b3d8a662d408845d', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (395, '0x7421d646874ed23d796e93a9a14bfe857cb37694', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (396, '0xfcbf66e6738c99cc0cd34fd76dbb8c00725259c0', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (397, '0xe698ee57ed58cc8a56f7476e0fc35bcdced1885e', '', NULL, NULL);
INSERT INTO "public"."wallets" VALUES (378, '0x1869cec5b0464b490941b59423ce0df8885c7fcd', 'vite_d60f1ead1395890bbb85f17081e94ce20b1e906807c175e4c1', NULL, '2019-07-27 04:28:11.51+00');
COMMIT;

-- ----------------------------
-- Indexes structure for table launch_logs
-- ----------------------------
CREATE INDEX "idx_created_at" ON "public"."launch_logs" USING btree (
  "created_at" "pg_catalog"."timestamp_ops" ASC NULLS LAST
);
CREATE INDEX "idx_launch_logs_nonce" ON "public"."launch_logs" USING btree (
  "nonce" "pg_catalog"."int4_ops" ASC NULLS LAST
);
CREATE UNIQUE INDEX "idx_launch_logs_transaction_hash" ON "public"."launch_logs" USING btree (
  "transaction_hash" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table launch_logs
-- ----------------------------
ALTER TABLE "public"."launch_logs" ADD CONSTRAINT "launch_logs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table orders
-- ----------------------------
ALTER TABLE "public"."orders" ADD CONSTRAINT "orders_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tokens
-- ----------------------------
ALTER TABLE "public"."tokens" ADD CONSTRAINT "vite_tokens_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Indexes structure for table transactions
-- ----------------------------
CREATE UNIQUE INDEX "idx_transactions_transaction_hash" ON "public"."transactions" USING btree (
  "transaction_hash" COLLATE "pg_catalog"."default" "pg_catalog"."text_ops" ASC NULLS LAST
);

-- ----------------------------
-- Primary Key structure for table transactions
-- ----------------------------
ALTER TABLE "public"."transactions" ADD CONSTRAINT "transactions_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table wallets
-- ----------------------------
ALTER TABLE "public"."wallets" ADD CONSTRAINT "eth_address" UNIQUE ("eth_address");

-- ----------------------------
-- Primary Key structure for table wallets
-- ----------------------------
ALTER TABLE "public"."wallets" ADD CONSTRAINT "wallets_pkey" PRIMARY KEY ("id");
