package main

import (
	"errors"
	"net/http"

	"github.com/gin-gonic/gin"
)

type OrderStatus struct {
	OrderId    string `json:"id"`
	Status     string `json:"status"`
	CustomerId string `json:"cid"`
}

var orders = []OrderStatus{
	OrderStatus{OrderId: "123", Status: "In Transit", CustomerId: "321"},
	OrderStatus{OrderId: "234", Status: "Delivered", CustomerId: "432"},
}

func trackOrders(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, orders)
}

func OrderById(c *gin.Context) {
	id := c.Param("id")
	book, err := getOrderById(id)

	if err != nil {
		c.IndentedJSON(http.StatusNotFound, gin.H{"message": "Book not found."})
		return
	}

	c.IndentedJSON(http.StatusOK, book)
}

func getOrderById(id string) (*OrderStatus, error) {
	for i, b := range orders {
		if b.OrderId == id {
			return &orders[i], nil
		}
	}
	return nil, errors.New("Book not found")
}

func main() {
	router := gin.Default()
	router.GET("/orders", trackOrders)
	router.GET("/orders/:id", OrderById)
	router.Run("localhost:8080")

}
