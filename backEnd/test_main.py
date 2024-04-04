from main import app
import pytest

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_homepage(client):
    response = client.get('/')
    assert response.status_code == 200
    assert b"Welcome to ness backend" in response.data


def test_get_data_endpoint(client):
    response = client.get('/get_data')
    assert response.status_code == 200


def test_receive_data(client):
    test_data = {
        "locations": [
            {"name": "Location1", "lat": 18.54149754525427, "lng": 73.79255976528276},
            {"name": "Location2", "lat": 18.55164920241211, "lng": 73.8434820739746}
        ]
    }

    response = client.post('/receive_data', json=test_data)
    assert response.status_code == 200

    json_data = response.get_json()
    assert 'message' in json_data
    assert 'results' in json_data
    assert 'ammenitiesList' in json_data


def test_wipe_data_endpoint(client):
    response = client.get('/wipe_data')
    assert response.status_code == 200


def test_refresh_backend(client):
    response = client.get('/refreshBackend')
    assert response.status_code == 200


def test_receive_data_empty_locations(client):
    test_data = {
        "locations": []
    }

    response = client.post('/receive_data', json=test_data)
    assert response.status_code == 400


def test_receive_preferences(client):
    test_data = {
        "list": [2,1]
    }

    response = client.post('/receive_preferences', json=test_data)
    assert response.status_code == 200
    json_data = response.get_json()
    assert 'message' in json_data



def test_receive_radius(client):
    test_data = {
        "radius": 1200
    }

    response = client.post('/receive_radius', json=test_data)
    assert response.status_code == 200
    json_data = response.get_json()
    assert 'message' in json_data
    assert 'newRadius' in json_data
    assert b"1200" in response.data

def test_append_data_empty(client):
    response = client.post('/append_data')
    assert response.status_code == 500


def test_append_data(client):
    test_data = {
        "results": []
    }

    response = client.post('/append_data', json=test_data)
    assert response.status_code == 200
