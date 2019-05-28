from django.test import TestCase, Client
from pages.models import Doctor,Comment, User,Medical_Unit, DoctorSerializer,CommentSerializer,MedicalUnitsSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.urls import reverse
import unittest
#from django.core.urlresolvers import reverse
from rest_framework.test import APITestCase
from rest_framework.authtoken.models import Token
import json
import datetime
from django.test import TestCase
#from polls.models import Poll, Choice

# Create your tests here.
client = Client()

class SimpleTest(unittest.TestCase):
    client = Client()
    def test_results_get_comment(self):
        resp = self.client.get(reverse('commentss', kwargs={'doctor_id': 1}))
        self.assertEqual(resp.status_code, 200)




    def test_results_delete_doctor(self):
        resp = self.client.delete(reverse('doctorssUD', kwargs={'id': 5}))
        self.assertEqual(resp.status_code, 204)




    def test_results_delete_medical_unit(self):
        resp = self.client.delete(reverse('medicalUnitssUD', kwargs={'id': 5}))
        self.assertEqual(resp.status_code, 204)



    def test_add_doctor(self):
        #mu = Medical_Unit();
        req_data = {
                    "id": 21,
                     "medical_units": [],
                    "name": "Hallie Fadel",
                    "specialization": "Gastroenterology",
                     "graduationYear": 1974,
                    "profilePicture": "user.jpg"
}
        url = reverse('doctorss')
        response = self.client.post(url, req_data, format='json')
        self.assertEqual(response.status_code, 201)






    def test_add_medical_unit(self):
        #mu = Medical_Unit();
        req_data = {
                "id": 21,
                "name": "Armona Medical Alpine Resort",
                "location": "South Noemibury",
                "type": "Clinic",
                "logo": "logo.jpg",
                "latitude": "34.676",
                "longitude": "44.5454"
            }

        url = reverse('medicalUnitss')
        response = self.client.post(url, req_data, format='json')
        self.assertEqual(response.status_code, 201)






    def test_update_doctor(self):
        #mu = Medical_Unit();
        req_data = json.dumps({
                    "id": 21,
                     "medical_units": [],
                    "name": "Hallie Fadel",
                    "specialization": "Gastroenterology",
                     "graduationYear": 1974,
                    "profilePicture": "user.jpg"
})
        url = reverse('doctorssUD', kwargs={'id':21})
        #url = reverse('doctorssdel', args=[21])
        response = self.client.put(url, req_data, content_type='application/json')
        self.assertEqual(response.status_code, 201)





    def test_update_medical_units(self):
        #mu = Medical_Unit();
        req_data = json.dumps({
                "id": 21,
                "name": "Armona Medical Alpine Resort",
                "location": "South Noemibury",
                "type": "Clinic",
                "logo": "logo.jpg",
                "latitude": "34.676",
                "longitude": "44.5454"
            })
        url = reverse('medicalUnitssUD', kwargs={'id':21})
        #url = reverse('doctorssdel', args=[21])
        response = self.client.put(url, req_data, content_type='application/json')
        self.assertEqual(response.status_code, 201)





#
# # response = self.client.get('/users/4/')
# # self.assertEqual(response.data, {'id': 4, 'username': 'lauren'})
# class SimpleTest(unittest.TestCase):
#     client = Client()
#     def test_details(self):
#         #client = Client()
#         response = self.client.get('comments/6')
#         self.assertEqual(response.status_code, 200)
#
#     def test_index(self):
#         #client = Client()
#         response = self.client.get('doctors/7')
#         self.assertEqual(response.status_code, 200)
#
#     def test_response(self):
#         view = User.as_view()
#         request = factory.get('/users/4')
#         response = view(request, pk='4')
#         response.render()  # Cannot access `response.content` without this.
#         response = self.client.get('/users/4/')
#         self.assertEqual(json.loads(response.content),{'id': 4, 'email': 'harber.daren@labadie.com'}, content_type='application/json')
#
# class AccountTests(APITestCase):
#     def test_create_account(self):
#         """
#         Ensure we can create a new account object.
#         """
#         url = reverse('doctorss')
#         data = {'id':999, 'content':'dr1', 'rating':8, 'hide':0,'doctor_id':1 }
#         response = self.client.post(url, data, format='json')
#         self.assertEqual(response.status_code, status.HTTP_201_CREATED)
#         #self.assertEqual(response.data, data)
#
# class ExamplelGetTest(TestCase):
#
#
#
#        def test_getLogin(self):
#            # Issue a GET request.
#            response = self.client.get('/login/')
#
#            # Check that the response is 200 OK.
#            self.assertEqual(response.status_code, 200)
#
# def test_job_object_bundle(self):
#     """
#     Test to verify job object bundle
#     """
#     self.client.login(email="admin@text.com", password="12345")
#     response = self.client.get("login")
#     self.assertEqual(200, response.status_code)
#
#     job_serializer_data = json.dumps(JobSerializer(instance=self.job).data)
#     job_serializer_data = [json.loads(job_serializer_data)]
#     response_data = json.loads(response.content)
#     self.assertEqual(job_serializer_data, response_data)
#
#
#
# # class GetSingleCommentTest(TestCase):
# #     """ Test module for GET single puppy API """
# #
# #     def setUp(self):
# #         self.casper = Comment.objects.create(
# #             id=999, content="dr1", rating=8, hide=0,doctor_id=1 )
# #         self.muffin = Doctor.objects.create(
# #             id=9999, content="dr1", rating=9, hide=1, doctor_id=2)
# #         self.rambo = Doctor.objects.create(
# #             id=99999, content="dr1", rating=4, hide=0, doctor_id=3)
# #         self.ricky = Doctor.objects.create(
# #             id=999999, content="dr1", rating=8, hide=0, doctor_id=5)
# #
# #     def test_get_valid_single_puppy(self):
# #         response = client.get(
# #             reverse('commentss', kwargs={'id': self.rambo.id}))
# #         puppy = Comment.objects.get(id=self.rambo.id)
# #         serializer = CommentSerializer(puppy)
# #         self.assertEqual(response.data, serializer.data)
# #         self.assertEqual(response.status_code, status.HTTP_200_OK)
#
#
#
#
#
#     # def setUp(self):
#     #     self.casper = Doctor.objects.create(
#     #         id=999, name="dr1", specialization='dr', graduationYear=1996,profilePicture='prf.jpg',medical_units = None )
#     #     self.muffin = Doctor.objects.create(
#     #         id=9999, name="dr2", specialization='dr', graduationYear=1996, profilePicture='prf.jpg', medical_units=None)
#     #     self.rambo = Doctor.objects.create(
#     #         id=99999, name="dr3", specialization='dr', graduationYear=1996, profilePicture='prf.jpg', medical_units=None)
#     #     self.ricky = Doctor.objects.create(
#     #         id=999999, name="dr4", specialization='dr', graduationYear=1996, profilePicture='prf.jpg', medical_units=None)