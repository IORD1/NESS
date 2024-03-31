from main import app
import pytest

@pytest.fixture
def client():
    with app.test_client() as client:
        yield client


def test_get_data_endpoint(client):
    response = client.get('/get_data')
    assert response.status_code == 200




