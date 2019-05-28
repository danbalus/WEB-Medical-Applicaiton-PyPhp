from django.shortcuts import render
from pages.models import Doctor,Comment, User,Medical_Unit, DoctorSerializer,CommentSerializer,MedicalUnitsSerializer,MedicalUnitChart,MedicalUnitChartSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from pprint import pprint

# Create your views here.
def home(request):
    return render(request, "home.html",{})

def about(request):
    return render(request, "about.html",{})

@api_view(['PUT'])
def comments(request,id,hide):
    # return render(request, None,Doctor.objects.all())
    # all_objects = Doctor.objects.all()
    all_objects = Comment.objects.filter(id=id).update(hide=hide)
    context = {'all_objects': all_objects}
    print("intra in comments")
    return render(request, "about.html", context)



@api_view(['DELETE'])
def usersD(request, id):
    all_objects = User.objects.filter(id=id).delete()
    context = {'all_objects': all_objects}
    print("intra in delete user")
    return render(request, "about.html", context)

@api_view(['GET'])
def commentsG(request, doctor_id):
    # all_objects = Comment.objects.filter(doctor_id=doctor_id)
    # context = {'all_objects': all_objects}
    # print("intra in comments " )
    # pprint((all_objects[0]))
    #
    # return render(request, "about.html", context)
    try:
        comments = Comment.objects.filter(doctor_id=doctor_id)
    except Comment.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)

# @api_view(['DELETE'])
# def medicalUnitsD(request, id):
#     all_objects = MedicalUnits.objects.filter(id=id).delete()
#     context = {'all_objects': all_objects}
#     print("intra in delete user")
#     return render(request, "about.html", context)
@api_view(['POST','OPTIONS'])
def doctorsC(request):
    print("intra in create user")
    if request.method == 'POST':
        serializer = DoctorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','OPTIONS'])
def doctorsUD(request, id):
    try:
        doctor = Doctor.objects.get(id = id)
        print(request.data)
    except Doctor.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = DoctorSerializer(doctor, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        doctor.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST','OPTIONS'])
def medicalUnitsC(request):
    if request.method == 'POST':
        serializer = MedicalUnitsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT', 'DELETE','OPTIONS'])
def medicalUnitsUD(request, id):
    try:
        medicalUnitsObj = Medical_Unit.objects.get(id = id)
        print(request.data)
    except Medical_Unit.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'PUT':
        serializer = MedicalUnitsSerializer(medicalUnitsObj, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        medicalUnitsObj.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET'])
def medUnitChartData(request):
    listChartsData = [];
    try:
        med_units = Medical_Unit.objects.all()
        for value in med_units:
            sum_doctor_rating_of_an_med_unit = 0
            all_doc_of_med_units = value.doctors.all()
            pprint("------------------------------------------------------")
            print(all_doc_of_med_units)
            if( all_doc_of_med_units ):
                for one_of_doctor in all_doc_of_med_units.all():
                    specific_doctor_ccomments = Comment.objects.filter(doctor_id=one_of_doctor.id)
                    sum_doctor_Rating = 0
                    if( specific_doctor_ccomments):
                        for one_of_doctor_comments in specific_doctor_ccomments:
                            sum_doctor_Rating = sum_doctor_Rating + one_of_doctor_comments.rating
                        doctor_rating_average = sum_doctor_Rating / len(specific_doctor_ccomments)
                        sum_doctor_rating_of_an_med_unit = sum_doctor_rating_of_an_med_unit + doctor_rating_average
                        #print( sum_doctor_rating_of_an_med_unit)
                all_doctors_of_med_unit_average = (sum_doctor_rating_of_an_med_unit / len(all_doc_of_med_units.all()));
                mu = MedicalUnitChart(9, value.name,all_doctors_of_med_unit_average,);
                listChartsData.append(mu);

    except Medical_Unit.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = MedicalUnitChartSerializer(listChartsData, many=True)
    return Response(serializer.data)


































