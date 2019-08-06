const store= {
	"info": {
		"_postman_id": "c39ad59f-8d8b-4fa4-8313-6566c97cb2ce",
		"name": "market",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
	},
	"item": [
		{
			"name": "index",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api"
					]
				},
				"description": "index"
			},
			"response": []
		},
		{
			"name": "All Category",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"auth": {
					"type": "noauth"
				},
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "{\n\t\"product_id\" : \"5\",\n\t\"user_id\" : \"1\"\n}"
				},
				"url": {
					"raw": "http://localhost/market/public/api/categories",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"categories"
					]
				},
				"description": "All Category"
			},
			"response": []
		},
		{
			"name": "All Products",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api/products",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"products"
					]
				},
				"description": "All Products"
			},
			"response": []
		},
		{
			"name": "All Best Selling",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api/BestSelling",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"BestSelling"
					]
				}
			},
			"response": []
		},
		{
			"name": "One Category",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api/products/20",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"products",
						"20"
					]
				}
			},
			"response": []
		},
		{
			"name": "One Product",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api/product/20",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"product",
						"20"
					]
				}
			},
			"response": []
		},
		{
			"name": "Add to Cart",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api/cart/20",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"cart",
						"20"
					]
				}
			},
			"response": []
		},
		{
			"name": "Cart",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api/showcart/1",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"showcart",
						"1"
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete From Cart",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "http://localhost/market/public/api/cart/delete/63",
					"protocol": "http",
					"host": [
						"localhost"
					],
					"path": [
						"market",
						"public",
						"api",
						"cart",
						"delete",
						"63"
					]
				}
			},
			"response": []
		}
	]
}
