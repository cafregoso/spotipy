from django.urls import path
from .views import GetRoom, GetRooms, JoinRoom, RoomView, CreateRoomView, UserInRoom

urlpatterns = [
    path('', RoomView.as_view()),
    path('rooms/', GetRooms.as_view()),
    path('create-room/', CreateRoomView.as_view()),
    path('get-room/', GetRoom.as_view()),
    path('join-room/', JoinRoom.as_view()),
    path('user-in-room/', UserInRoom.as_view()),
]
