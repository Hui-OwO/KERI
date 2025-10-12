// HTML 문서가 완전히 로드된 후 스크립트가 실행되도록 합니다.
document.addEventListener('DOMContentLoaded', function () {
    
    // --- '기술소개 자료' 섹션의 카테고리 탭 기능 ---
    const categoryBtns = document.querySelectorAll('.tech_category button');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () { 
            // plus_btn을 제외한 모든 버튼에서 'active' 클래스를 제거합니다.
            categoryBtns.forEach(b => {
                if (!b.classList.contains('plus_btn')) {
                    b.classList.remove('active');
                }
            }); 
            // 클릭된 버튼이 plus_btn이 아닐 경우에만 'active' 클래스를 추가합니다.
            if (!this.classList.contains('plus_btn')) {
                this.classList.add('active'); 
            }
        });
    });

    // --- 'KERI 소식' 섹션의 탭 기능 ---
    const noticeTabs = document.querySelectorAll('.notice_tabs button[data-tab]');
    const noticePanels = document.querySelectorAll('.notice_tab_panel');

    noticeTabs.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('plus_btn')) {
                noticeTabs.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const tab = this.getAttribute('data-tab');
                noticePanels.forEach(panel => {
                    if (panel.getAttribute('data-tab') === tab) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            }
        });
    });

    // --- 'SNS' 섹션의 탭 기능 ---
    const snsTabs = document.querySelectorAll('.SNS_tabs button[data-sns]');
    const snsPanels = document.querySelectorAll('.SNS_tab_panel');

    snsTabs.forEach(btn => {
        btn.addEventListener('click', function() {
            if (!this.classList.contains('plus_btn')) {
                snsTabs.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const tab = this.getAttribute('data-sns');
                snsPanels.forEach(panel => {
                    if (panel.getAttribute('data-sns') === tab) {
                        panel.classList.add('active');
                    } else {
                        panel.classList.remove('active');
                    }
                });
            }
        });
    });

    // --- LNB 아코디언 메뉴 기능 ---
    const lnbMenuItems = document.querySelectorAll('.lnb_menu > li');

    // 페이지 로드 시 활성화된 메뉴의 서브메뉴가 보이도록 먼저 처리
    const activeLnbItem = document.querySelector('.lnb_menu > li.active');
    if (activeLnbItem) {
        const activeSubMenu = activeLnbItem.querySelector('.sub_menu');
        if (activeSubMenu) {
            activeSubMenu.style.display = 'block';
        }
    }

    lnbMenuItems.forEach(item => {
        const link = item.querySelector('a');
        const subMenu = item.querySelector('.sub_menu');

        // 서브메뉴가 있는 항목에만 클릭 이벤트 추가
        if (subMenu) { 
            link.addEventListener('click', function (e) {
                // 실제 페이지 이동이 필요하다면 이 줄을 주석 처리하거나 삭제하세요.
                e.preventDefault(); 

                const isActive = item.classList.contains('active');

                // 모든 메뉴를 우선 닫고 초기화
                lnbMenuItems.forEach(i => {
                    i.classList.remove('active');
                    const icon = i.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                    }
                    const sub = i.querySelector('.sub_menu');
                    if (sub) {
                        sub.style.display = 'none';
                    }
                });

                // 만약 클릭한 메뉴가 닫혀 있었다면, 해당 메뉴만 열기
                if (!isActive) {
                    item.classList.add('active');
                    const icon = item.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                    }
                    subMenu.style.display = 'block';
                }
            });
        }
    });
});
