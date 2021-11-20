from time import sleep


def make_email_body(
    id,
    target,
    email,
    term_start,
    term_end,
    term1_name,
    term2_name,
    term3_name,
    related_contracts,
):
    body = "<p>계약번호: " + str(id) + "</p>"
    body += "<p>계약대상: " + target + "</p>"
    body += "<p>계약 대상 담당자 이메일 주소: " + str(email) + "</p>"
    body += "<p>계약기간: " + str(term_start) + "~" + str(term_end) + "</p>"
    body += "<p>계약조항</p>"
    body += "<p>" + term1_name + "</p>"
    body += "<p>" + term2_name + "</p>"
    body += "<p>" + term3_name + "</p>"
    body += "<p>관련계약</p>"
    if related_contracts is not None:
        for contract in related_contracts:
            body += "<p>" + str(contract) + "</p>"

    return body


def send_email(email_to: str, html_body: str) -> bool:
    """
    지원자의 편의를 위해 테스트를 위한 더미 이메일 전송 함수를 구현해두었습니다.
    이메일 발송 로직을 구현하는 것 대신 이 함수를 사용해주세요.
    실제로 이메일이 발송되지는 않지만 잘 발송된다고 가정합니다.

    주의. 함수 내부 구현을 수정하지 말아주세요
    """
    sleep(1)
    print(email_to, html_body, flush=True)
    return True
